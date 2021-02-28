const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snipcartValidation = new Schema({
    id: String,
    name: String,
    url: String,
    price: Number,
    stock: Number
})

module.exports = mongoose.model('Validation', snipcartValidation);