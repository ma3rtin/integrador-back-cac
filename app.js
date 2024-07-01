const express = require('express');
const cors = require("cors");
require('dotenv').config();

const usuarioRouter = require("./routes/usuarioRouter.js");
const productoRouter = require("./routes/productoRouter.js");
const db = require("./data/db.js");

const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexión a la base de datos exitosa");
        await db.sync();
        console.log("Sincronización exitosa")
    } catch (error) {
        console.error("Error al conectar con la base de datos: ", error);
    }
};

const port = process.env.EXPRESS_PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    conexionDB();
    console.log(`Server running on port ${port}`);
});

app.use("/user", usuarioRouter);
app.use("/product", productoRouter);
