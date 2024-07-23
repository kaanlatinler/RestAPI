const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productID: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);