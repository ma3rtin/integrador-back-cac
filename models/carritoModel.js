const db = require("../data/db.js");
const usuarioModel = require("./usuarioModel.js");

const { DataTypes } = require("sequelize");

const carritoModel = db.define(
  "carrito",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: usuarioModel,
        key: "id",
      },
    },
  },
  {
    tableName: "carrito",
  }
);

module.exports = carritoModel;
