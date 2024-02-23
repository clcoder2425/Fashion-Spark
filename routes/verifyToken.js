const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT, (err, user) => {
            if(err) res.status(403).json("Invalid token!");
            req.user = user;
            next();
})
    }else{
        return res.status(401).json("User not authenticated!")
    }
};

const verifyTokenAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.param.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("User is not authorized!");
        }
    });
};

const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        }else{
            res.status(403).json("User is not authorized!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAdmin };