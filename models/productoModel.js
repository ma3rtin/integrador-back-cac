const db = require("../data/db.js");

const {DataTypes} = require('sequelize');

const productoModel = db.define("producto", {
    nombre: {type: DataTypes.STRING},
    descripcion: {type: DataTypes.STRING},
    precio: {type: DataTypes.DECIMAL(10, 2)},
    stock: {type: DataTypes.INTEGER},
    categoria: {type: DataTypes.STRING}
},{
    tableName: "producto"
});

module.exports = productoModel;