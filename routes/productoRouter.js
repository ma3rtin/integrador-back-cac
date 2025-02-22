const express = require('express');

const {obtenerProductos, obtenerProductoPorId, agregarProducto, modificarProducto, eliminarProducto, obtenerProductosPorCategoria} = require("../controllers/productoController.js");
const authMiddleware = require('../middlewares/authMiddleware.js');

const productoRouter = express.Router();

productoRouter.get("/", obtenerProductos);
productoRouter.get("/categoria/:categoria", obtenerProductosPorCategoria);
productoRouter.get("/:id", obtenerProductoPorId);
productoRouter.post("/", agregarProducto);
productoRouter.put("/:id", modificarProducto);
productoRouter.delete("/:id", eliminarProducto);

module.exports = productoRouter;