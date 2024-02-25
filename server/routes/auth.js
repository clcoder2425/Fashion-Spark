const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
router.post("/register", async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, process.env.PASSWORD)
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch (err){
        res.status(500).json(err);
    }
});

// Login an exsisting user
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong username or password");
        
        const validPassword = await bcrypt.compare(user.password, process.env.PASSWORD);
        
        const goodPassword = validPassword.toString(bcrypt.compare(user.password, process.env.PASSWORD));
        !goodPassword && res.status(400).json("Wrong username or password");
        
        const accessToken = jwt.sign({
            id:user._id, isAdmin: user.isAdmin
        }, process.env.JWT, {expiresIn: "5d"});

        const {password, ...others} = user._doc;
        res.status(200).json({ ...others, accessToken });
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;