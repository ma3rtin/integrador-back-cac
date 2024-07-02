const db = require("../data/db.js");
const ventaModel = require("./ventaModel.js");
const productoModel = require("./productoModel.js");

const {DataTypes} = require("sequelize");

const ventaProductoModel = db.define("ventaproducto", {
    id_venta:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ventaModel,
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
    },
    cantidad: {type: DataTypes.INTEGER}
}, {
    tableName: "ventaproducto"
});

module.exports = ventaProductoModel;