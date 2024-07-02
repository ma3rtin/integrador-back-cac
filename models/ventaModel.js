const db = require("../data/db.js");
const usuarioModel = require("../models/usuarioModel.js");

const {DataTypes} = require("sequelize");

const ventaModel = db.define("venta", {
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarioModel,
            key: "id",
          },
    },
    total: {type: DataTypes.DECIMAL(10, 2)}
},{
    tableName: "venta"
});

module.exports = ventaModel;