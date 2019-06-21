const Cart = require('../models/Cart')

module.exports = {
    async index(req, res) {
        const products = await Cart.find()

        return res.json(products)
    },

    async store(req, res) {
        const { nome, valor } = req.body

        const product = await Cart.create({
            nome, 
            valor
        })

        return res.json(product)
    },

    async increaseQuantity(req, res) {
        const product = await Cart.findById(req.params.id)
        
        if (product.quantidade == 10)
            return

        ++product.quantidade
        
        product.save()

        return res.json(product)
    },

    async decreaseQuantity(req, res) {
        const product = await Cart.findById(req.params.id)

        if (product.quantidade == 1)
            return 
        
        --product.quantidade

        product.save()

        return res.json(product)
    }
}
 