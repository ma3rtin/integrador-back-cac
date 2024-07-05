const express = require('express');

const {obtenerUsuarios, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario} = require("../controllers/usuarioController.js");
const { register, login } = require('../controllers/authController.js');
const authMiddleware = require('../middlewares/authMiddleware.js')

const usuarioRouter = express.Router();

usuarioRouter.get("/", obtenerUsuarios);
usuarioRouter.get("/:id", obtenerUsuarioPorId);
usuarioRouter.post("/registro", register);
usuarioRouter.post("/login", login);
usuarioRouter.delete("/:id", eliminarUsuario);
usuarioRouter.put("/:id", actualizarUsuario);

usuarioRouter.post('/protected', authMiddleware, (req,res)=>{
    res.status(200).send("Es una prueba para saber si el token enviado es valido")   
})

module.exports = usuarioRouter;