const express = require("express");
const { obtenerVentasPorUsuario, realizarVenta, obtenerDetalleDeVenta, obtenerVentas } = require("../controllers/ventaController");

const ventaRouter = express.Router();

ventaRouter.get("/", obtenerVentas);
ventaRouter.get("/:id", obtenerVentasPorUsuario);
ventaRouter.post("/:id_usuario", realizarVenta);
ventaRouter.get("/:id_venta", obtenerDetalleDeVenta);

module.exports = ventaRouter;