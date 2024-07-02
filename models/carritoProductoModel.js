const db = require("../data/db.js");
const carritoModel = require("./carritoModel.js");
const productoModel = require("./productoModel.js");

const {DataTypes} = require("sequelize");

const carritoProductoModel = db.define("carritoproducto",{
    id_carrito: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: carritoModel,
            key: "id"
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: productoModel,
            key: "id"
        }
    }
},{
    tableName: "carritoproducto"
});

module.exports = carritoProductoModel;