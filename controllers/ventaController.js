const ventaModel = require("../models/ventaModel.js");

const obtenerVentasPorUsuario = async (req, res) => {
    try {
        const {id_usuario} = req.params;
        const ventas = await ventaModel.findAll({where: {id_usuario}});
        res.json(ventas);
    } catch (error) {
        res.json({message: error.message});
    };
};

module.exports = {obtenerVentasPorUsuario};