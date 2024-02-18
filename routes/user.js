const router = require('express').Router();

// usertest is a placeholder for the actual route
router.get("/usertest", (req, res) => {
    res.send("user test");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username
    console.log(username);
    res.send("your username is: " + username);
});

module.exports = router;