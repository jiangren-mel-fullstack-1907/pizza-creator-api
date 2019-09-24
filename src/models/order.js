const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        totalPrice: {
            type: Number,
            required: true
        },
        pizzaSize: { type: String, ref: 'PizzaSize' },
        orderItems: [{ 
            topping: {type: String, ref: 'Topping'},
            quantity: {type: Number, required: true}
        }],
        customer: { type: String, ref: 'User' }
    },
    {
      timestamps: true
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Order', orderSchema);