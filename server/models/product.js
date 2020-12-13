const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number
})

module.exports = mongoose.model('Product', product);