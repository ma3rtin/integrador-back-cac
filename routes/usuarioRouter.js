const express = require('express');

const {obtenerUsuarios, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario} = require("../controllers/usuarioController.js");
const { register, login } = require('../controllers/authController.js');

const usuarioRouter = express.Router();

usuarioRouter.get("/", obtenerUsuarios);
usuarioRouter.get("/:id", obtenerUsuarioPorId);
usuarioRouter.post("/registro", register);
usuarioRouter.post("/login", login);
usuarioRouter.delete("/:id", eliminarUsuario);
usuarioRouter.put("/:id", actualizarUsuario);

module.exports = usuarioRouter;