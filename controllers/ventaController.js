const ventaModel = require("../models/ventaModel.js");
const ventaProductoModel = require("../models/ventaProductoModel.js");
const productoModel = require("../models/productoModel.js");

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await ventaModel.findAll();
    res.json(ventas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerVentasPorUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const ventas = await ventaModel.findAll({ where: { id_usuario } });
    res.json(ventas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const realizarVenta = async (req, res) => {
  try {
    const { id_usuario, productos } = req.body;
    const venta = await ventaModel.create({ id_usuario });
    const ventaProductos = productos.map(async (producto) => {
      await productoModel.update(
        { stock: producto.stock - 1 },
        { where: { id: producto.id } }
      );
      return {
        id_venta: venta.id,
        id_producto: producto.id,
        cantidad: producto.cantidad,
      };
    });
    await ventaProductoModel.bulkCreate(ventaProductos);
    res.json(venta);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerDetalleDeVenta = async (req, res) => {
  try {
    const { id_venta } = req.params;
    const venta = await ventaModel.findByPk(id_venta);
    const ventaProductos = await ventaProductoModel.findAll({
      where: { id_venta },
    });
    const productos = await Promise.all(
      ventaProductos.map(async (ventaProducto) => {
        return await productoModel.findByPk(ventaProducto.id_producto);
      })
    );
    res.json(venta, productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  obtenerVentas,
  obtenerVentasPorUsuario,
  realizarVenta,
  obtenerDetalleDeVenta,
};