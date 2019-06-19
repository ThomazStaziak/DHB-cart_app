const express = require('express')
const multer = require('multer')

const cartController = require('./controllers/cartController')

/* NEEDING OPTMIZE */
const upload = multer({ dest: './' })
const routes = new express.Router()

routes.get('/produtos', cartController.index)
routes.post('/adicionar-produtos', upload.single('bla'), cartController.store)

module.exports = routes
