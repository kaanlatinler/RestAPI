const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('./models/order');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        product: req.body.productID,
        quantity: req.body.quantity
    });

    order.save()
    .then((result) => {
        console.log(result);
        res.status(201).json({
            message: 'Orders was created',
            order: order
        });
    }).catch((err) => {
        console.log(err);
    });
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Details',
        orderID: req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted',
        orderID: req.params.orderID
    });
});

module.exports = router;