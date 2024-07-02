const express = require("express");
const { obtenerVentasPorUsuario, realizarVenta, obtenerDetalleDeVenta, obtenerUsuarios } = require("../controllers/ventaController");

const ventaRouter = express.Router();

ventaRouter.get("/", obtenerUsuarios);
ventaRouter.get("/:id", obtenerVentasPorUsuario);
ventaRouter.post("/:id_usuario", realizarVenta);
ventaRouter.get("/:id_venta", obtenerDetalleDeVenta);

module.exports = ventaRouter;