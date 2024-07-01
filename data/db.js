const {Sequelize} = require("sequelize");

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DB;
const port = process.env.MYSQL_PORT;

//agregar variables de entorno
const db = new Sequelize(database, user, password, {
    host,
    dialect: "mysql",
    port
});

module.exports = db;
