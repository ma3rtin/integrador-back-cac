const jwt = require("jsonwebtoken");

const config = require("../config/config.js");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res
      .status(403)
      .send({ auth: false, message: "No se proveyó un token" });

  const token = authHeader.split(" ")[1];

  if (!token)
    return res.status(403).send({ auth: false, message: "Token vacío" });

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err)
      return res.status(403).send({ auth: false, message: "Token inválido" });

    req.userId = decoded.id;

    next();
  });
};
