const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    nome: String,
    valor: {
        type: Number,
        default: 30
    },
    quantidade: {
        type: Number,
        default: 1
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Cart', CartSchema)


