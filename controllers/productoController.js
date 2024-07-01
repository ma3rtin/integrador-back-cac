const productoModel = require("../models/productoModel.js");

const obtenerProductos = async (req, res) => {
    try{
        const productos = await productoModel.findAll();
        res.json(productos);
    }catch(error){
        res.json({message: error.message});
    }
};

const obtenerProductoPorId = async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await productoModel.findByPk(id);
    } catch (error) {
        res.json({message:error.message});
    }
};

const agregarProducto = async (req, res) => {
    try {
        const {nombre, descripcion, precio, stock, categoria} = req.body;
        const nuevoProducto = await productoModel.create({nombre, descripcion, precio, stock, categoria});
        res.json(nuevoProducto);
    } catch (error) {
        res.json({message: error.message});
    }
};

module.exports = {obtenerProductos, obtenerProductoPorId, agregarProducto};