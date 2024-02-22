const Product = require("../models/Product");
const {
    verifyToken,
    verifyTokenAuth,
    verifyTokenAdmin,
} = require("./verifyToken");

const router = require('express').Router();

// Create product
router.post("/", verifyTokenAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update product
router.put("/:id", verifyTokenAdmin, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;