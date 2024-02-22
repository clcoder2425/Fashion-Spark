const { verifyToken, verifyTokenAuth, verifyTokenAdmin } = require('./verifyToken');

const router = require('express').Router();

// Update user
router.put("/:id", verifyTokenAuth, async (req, res) => {
    if(req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, process.env.PASSWORD)
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, 
        {new: true}
        );
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Delete user by id
router.delete("/:id", verifyTokenAuth, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted successfully");
    } catch (err){
        res.status(500).json(err);
    }
});

// Get user by id
router.get("/", verifyTokenAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query 
        ? await User.find().sort({ _id: -1}).limit(5)
        : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;