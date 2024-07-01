const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const usuarioModel = db.define("usuario", {
    nombre: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    contraseña: {type: DataTypes.STRING},
    genero: {type: DataTypes.STRING},
    rol: { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' }
},{
    tableName: 'usuario'
});

module.exports = usuarioModel;
