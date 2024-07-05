const carritoModel = require("../models/carritoModel.js");
const usuarioModel = require("../models/usuarioModel.js");

const obtenerUsuarios = async (req, res) =>{
    try{
        const usuarios = await usuarioModel.findAll();
        res.json(usuarios);
    }catch(error){
        res.json({message: error.message});
    }
};

const obtenerUsuarioPorId = async (req, res) =>{
    try{
        const {id} = req.params;
        const usuario = await usuarioModel.findByPk(id);
        res.json(usuario);
    }catch(error){
        res.json({message: error.message});
    }
};


const eliminarUsuario = async (req, res)=>{
    try{
        const {id} = req.params;
        await carritoModel.destroy({where: {id_usuario: id}});
        await usuarioModel.destroy({where: {id}});
        res.json({message: "Usuario eliminado correctamente"});
    }catch(error){
        res.json({message: error.message});
    }
};

const actualizarUsuario = async (req, res)=>{
    try{
        const {id} = req.params;
        let {nombre, apellido, email, contraseña, genero} = req.body;
        nombre = nombre + " " + apellido;
        await usuarioModel.update({nombre, email, contraseña, genero}, {where: {id}});
        res.json({message: "Usuario actualizado correctamente"});
    }catch(error){
        res.json({message: error.message});
    }
};

module.exports = {obtenerUsuarios, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario};