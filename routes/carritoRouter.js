const express = require('express');
const { obtenerCarritoPorId, agregarProductoACarrito, obtenerCarritos } = require('../controllers/carritoController');

const carritoRouter = express.Router();

carritoRouter.get("/", obtenerCarritos); 
carritoRouter.get("/:id", obtenerCarritoPorId);
carritoRouter.post("/:id_carrito", agregarProductoACarrito);

module.exports = carritoRouter;