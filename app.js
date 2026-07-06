const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola mundo desde AWS!");
});

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000!");
});
