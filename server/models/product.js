const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    featured: Boolean,
    description: String,
    price: Number,
    inventory: Number,
    images: [{src: String}],
    category: [String],
})

module.exports = mongoose.model('Product', product);