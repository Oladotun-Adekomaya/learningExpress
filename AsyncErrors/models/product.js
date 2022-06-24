const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: .99
    },
    category:{
        type: String,
        lowercase: true,
        enum: ['fruit','vegetable', 'diary']
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;  // This is to export the model do it can be used elsewhere