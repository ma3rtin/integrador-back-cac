const express = require('express');
const { obtenerCarritoPorId, agregarProductoACarrito, obtenerCarritos, obtenerProductosDeUnCarrito } = require('../controllers/carritoController');

const carritoRouter = express.Router();

carritoRouter.get("/", obtenerCarritos); 
carritoRouter.get("/:id",  obtenerCarritoPorId);
carritoRouter.post("/:idProducto", agregarProductoACarrito);
carritoRouter.get("/productos/:id", obtenerProductosDeUnCarrito);

module.exports = carritoRouter;