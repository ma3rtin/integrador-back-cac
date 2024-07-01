const express = require('express');

const carritoRouter = express.Router();

carritoRouter.get("/:id", obtenerCarritoPorIdUsuario);

module.exports = carritoRouter;