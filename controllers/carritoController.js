const carritoModel = require("../models/carritoModel.js");
const carritoProductoModel = require("../models/carritoProductoModel.js");
const productoModel = require("../models/productoModel.js");

const obtenerCarritoPorId = async () => {
  try {
    const { id } = req.params;
    const carrito = await carritoModel.findByPk(id);
    res.json(carrito);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerCarritos = async (req, res) => {
  try {
    const carritos = await carritoModel.findAll();
    console.log(carritos);
    res.json(carritos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const agregarProductoACarrito = async (req, res) => {
  try {
    const { id_carrito } = req.params;
    const { id_producto, cantidad } = req.body;
    console.log(id_carrito, id_producto);
    const carrito = await carritoModel.findByPk(id_carrito);
    const producto = await productoModel.findByPk(id_producto);
    if (!carrito || !producto) {
      res.json({ message: "El carrito o el producto no existen" });
    } else if (producto.stock < cantidad) {
      res.json({ message: "No hay stock suficiente" });
    } else {
      const carritoProducto = await carritoProductoModel.create({
        id_carrito,
        id_producto,
        cantidad,
      });
      res.json(carritoProducto);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  obtenerCarritoPorId,
  agregarProductoACarrito,
  obtenerCarritos,
};
