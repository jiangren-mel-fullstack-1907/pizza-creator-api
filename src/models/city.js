const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        post: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        weathers: [{ type: String, ref: 'Weather' }],
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('City', citySchema);