const Order = require('../models/Order');
const {
    verifyToken,
    verifyTokenAuth,
    verifyTokenAdmin,
} = require('./verifyToken');


const router = require('express').Router();

// Create order
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update order
router.put('/:id', verifyTokenAdmin, async (req, res) => {
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete order by id
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
    
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order has been deleted successfully');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get order by id
router.get('/:id', verifyTokenAuth, async (req, res) => {
    
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;