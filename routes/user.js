const { verifyToken, verifyTokenAuth } = require('./verifyToken');

const router = require('express').Router();

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

router.delete("/:id", verifyTokenAuth, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted successfully");
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;