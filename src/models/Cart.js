const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    name: String,
    value: Number,
})

module.exports = mongoose.model('Cart', CartSchema)


