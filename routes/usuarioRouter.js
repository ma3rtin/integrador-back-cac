const express = require('express');

const {obtenerUsuarios, obtenerUsuarioPorId, registrarUsuario, eliminarUsuario, actualizarUsuario} = require("../controllers/usuarioController.js");

const usuarioRouter = express.Router();

usuarioRouter.get("/", obtenerUsuarios);
usuarioRouter.get("/:id", obtenerUsuarioPorId);
usuarioRouter.post("/registro", registrarUsuario)
usuarioRouter.delete("/:id", eliminarUsuario);
usuarioRouter.put("/:id", actualizarUsuario);

module.exports = usuarioRouter;