const express = require('express');

const {obtenerProductos, obtenerProductoPorId, agregarProducto} = require("../controllers/productoController.js");

const productoRouter = express.Router();

productoRouter.get("/", obtenerProductos);
productoRouter.get("/:id", obtenerProductoPorId);
productoRouter.post("/", agregarProducto);

module.exports = productoRouter;