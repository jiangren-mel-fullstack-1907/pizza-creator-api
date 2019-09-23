const mongoose = require('mongoose');

const toppingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        price: {
            type: Number,
            required: true
        },
        icon: {
            type: String
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Topping', toppingSchema);