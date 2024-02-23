const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
router.post("/register", async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
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
        if (!user) {
            return res.status(400).json({error: "Wrong username or password"});
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({error: "Wrong username or password"});
        }
        
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin
        }, process.env.JWT, { expiresIn: "5d" });

        const {password, ...others} = user._doc;
        res.status(200).json({ ...others, accessToken });
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;