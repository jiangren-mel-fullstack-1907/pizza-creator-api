const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
    {
        topping: { type: String, ref: 'Topping' },
        quantity: {
            type: Number,
            required: true
        },
    }
);

module.exports = mongoose.model('OrderItem', orderItemSchema);