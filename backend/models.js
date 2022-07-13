const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema);


module.exports = {User, Product};