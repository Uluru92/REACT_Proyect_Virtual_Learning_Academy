const express = require("express");
const RouterConsolas = require("./Routes/ConsolasRoute");
const RouterVideoJuevos = require("./Routes/VideojuegosRoute");
const RouterUsuarios = require("./Routes/UsuariosRoute");

const app = express();
const port = 4321;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());

app.use("/api/route", RouterConsolas)
app.use("/api/route", RouterVideoJuevos)
app.use("/api/route", RouterUsuarios)


app.listen(port, ()=>{
    console.log("Se ha refresco el sitio en el puerto:", port);
})