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
    const { idProducto, cantidad } = req.body;
    const carrito = await carritoModel.findByPk(2);
    const producto = await productoModel.findByPk(idProducto);
    const carritoProducto = await carritoProductoModel.findOne({
      where: { id_carrito: carrito.id, id_producto: idProducto },
    });
    if (!carrito || !producto) {
      res.json({ message: "El carrito o el producto no existen" });
    } else if (producto.stock < cantidad) {
      res.json({ message: "No hay stock suficiente" });
    } else if (carritoProducto) {
      const cantidadActualizada = carritoProducto.cantidad + cantidad;
      await carritoProductoModel.update(
        { cantidad: cantidadActualizada },
        { where: { id: carritoProducto.id } }
      );
      res.json(carritoProducto);
    } else {
      const carritoProducto = await carritoProductoModel.create({
        id_carrito: carrito.id,
        id_producto: idProducto,
        cantidad,
      });
      res.json(carritoProducto);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const obtenerProductosDeUnCarrito = async (req, res) =>{
  try {
    const { id } = req.params;
    const carrito = await carritoModel.findByPk(id);
    if (!carrito) {
      res.json({ message: "El carrito no existe" });
    } else {
      const productos = await carritoProductoModel.findAll({
        where: { id_carrito: carrito.id },
        include: [{ model: productoModel }],
      });
      res.json(productos);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = {
  obtenerCarritoPorId,
  agregarProductoACarrito,
  obtenerCarritos,
  obtenerProductosDeUnCarrito
};
