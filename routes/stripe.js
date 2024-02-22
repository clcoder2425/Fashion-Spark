const router = require("express").Router();
const Stripe = require("stripe")(process.env.STRIPE_KEY); // Stripe secret key needed in .env file

// Create a new payment
router.post("/payment", (req, res) => {
    Stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
