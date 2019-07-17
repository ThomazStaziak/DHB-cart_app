const express = require("express");
const cartController = require("./controllers/cartController");

const routes = new express.Router();

routes.get("/produtos", cartController.index);
routes.post("/adicionar-produtos", cartController.store);
routes.get("/aumentar-quantidade/:id", cartController.increaseQuantity);
routes.get("/diminuir-quantidade/:id", cartController.decreaseQuantity);

module.exports = routes;
