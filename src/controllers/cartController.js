const Cart = require('../models/Cart')

module.exports = {
    async index(req, res) {
        const products = await Cart.find()

        return res.json(products)
    },

    async store(req, res) {
        const { name, value } = req.body

        const product = await Cart.create({
            name, 
            value
        })

        return res.json(product)
    }
}
