const express = require('express');

const {obtenerUsuarios, obtenerUsuarioPorId, registrarUsuario} = require("../controllers/usuarioController.js");

const usuarioRouter = express.Router();

usuarioRouter.get("/", obtenerUsuarios);
usuarioRouter.get("/:id", obtenerUsuarioPorId);
usuarioRouter.post("/registro", registrarUsuario)
// usuarioRouter.post("/", registrarUsuario);
// usuarioRouter.put("/:id", actualizarUsuarios);
// usuarioRouter.get("/:id", eliminarUsuarios);

module.exports = usuarioRouter;