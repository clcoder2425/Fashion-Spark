const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(authHeader){
        jwt.verify(token, process.env.JWT, (err, user) => {
            if(err) res.status(403),json("Invalid token!");
            req.user = user;
            next();
})
    }else{
        return res.status(401).json("User not authenticated!")
    }
}