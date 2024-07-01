const db = require("../data/db.js");
const usuarioModel = require("./usuarioModel.js");

const { DataTypes } = require("sequelize");

const carritoModel = db.define("carrito", {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
          model: usuarioModel,
          key: "id"
      }
  },
}, {
  tableName: 'carrito'
});

module.exports = carritoModel;

module.exports = carritoModel;
