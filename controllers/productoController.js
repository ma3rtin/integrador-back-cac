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
        res.json(producto);
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

const modificarProducto = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, descripcion, precio, stock, categoria} = req.body;
        const productoModificado = await productoModel.update({nombre, descripcion, precio, stock, categoria}, {where: {id}});
        res.json(productoModificado);
    } catch (error) {
        res.json({message: error.message});
    };
;}

const eliminarProducto = async(req, res) =>{
    try{
        const {id} = req.params;
        const productoEliminado = await productoModel.destroy({where: {id}});
        res.json(productoEliminado);
    }catch(error){
        res.json(error);
    }
}

module.exports = {obtenerProductos, obtenerProductoPorId, agregarProducto, modificarProducto, eliminarProducto};