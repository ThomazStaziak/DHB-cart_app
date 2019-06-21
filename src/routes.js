const express = require('express')
const multer = require('multer')

const cartController = require('./controllers/cartController')

/* NEEDING OPTMIZE */
const upload = multer({ dest: './' })
const routes = new express.Router()

routes.get('/produtos', cartController.index)
routes.post('/adicionar-produtos', upload.single('optmize'), cartController.store)
routes.get('/aumentar-quantidade/:id', upload.single('optmize'), cartController.increaseQuantity)
routes.get('/diminuir-quantidade/:id', upload.single('optmize'), cartController.decreaseQuantity)

module.exports = routes
