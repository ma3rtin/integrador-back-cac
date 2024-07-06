const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const usuarioModel = require("../models/usuarioModel.js");

const config = require("../config/config.js");

exports.register = async (req, res) => {
  try{
    let { nombre, apellido, email, contraseña, genero } = req.body;

    nombre = nombre + " " + apellido;
  
    const contraseñaHasheada = bcrypt.hashSync(contraseña, 8);
    contraseña=contraseñaHasheada
    const usuarioNuevo = await usuarioModel.create({
      nombre,
      email,
      contraseña,
      genero
    });
  
    const token = jwt.sign({ id: usuarioNuevo.id }, config.secretKey, {
      expiresIn: config.tokenExpiresIn,
    });
  
    res.status(200).json(token);
  }catch(error){
    res.json({ message: error.message });
  }
  
};

exports.login = async (req, res) => {
  const { email, contraseña } = req.body;

  const usuario = await usuarioModel.findOne({ where: { email } });

  if (!usuario)
    return res.status(404).json({ message: "Usuario no encontrado" });

  const contraseñaCorrecta = bcrypt.compareSync(contraseña, usuario.contraseña);

  if (!contraseñaCorrecta)
    return res.status(401).json({ message: "Contraseña invalida" });

  const token = jwt.sign({ id: usuario.id }, config.secretKey, {
    expiresIn: config.tokenExpiresIn,
  });

  res.status(200).json(token);
};
