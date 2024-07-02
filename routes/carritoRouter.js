const express = require('express');
const { obtenerCarritoPorId } = require('../controllers/carritoController');

const carritoRouter = express.Router();

carritoRouter.get("/:id", obtenerCarritoPorId);

module.exports = carritoRouter;