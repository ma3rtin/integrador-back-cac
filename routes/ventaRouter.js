const express = require("express");
const { obtenerVentasPorUsuario } = require("../controllers/ventaController");

const ventaRouter = express.Router();

ventaRouter.get("/", obtenerVentasPorUsuario);

module.exports = ventaRouter;