const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    nome: String,
    valor: Number,
    quantidade: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Cart', CartSchema)


