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

const registrarUsuario = async (req, res) =>{
    try{
        let {nombre, apellido, email, contraseña, genero} = req.body;
        nombre = nombre + " " + apellido;
        const usuario = await usuarioModel.create({nombre, email, contraseña, genero});
        res.json(usuario);
    }catch(error){
        res.json({message: error.message});
    }
}

module.exports = {obtenerUsuarios, obtenerUsuarioPorId, registrarUsuario};