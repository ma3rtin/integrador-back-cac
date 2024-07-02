const carritoModel = require("../models/carritoModel.js");

const obtenerCarritoPorId = async () =>{
    try{
        const {id}  = req.params;
        const carrito = await carritoModel.findByPk(id);
        res.json(carrito);
    }catch(error){
        res.json({message: error.message});
    }
}

module.exports = {obtenerCarritoPorId};