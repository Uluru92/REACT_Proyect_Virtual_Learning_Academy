const express = require("express");
const RouterPersonas = require("./Routes/PersonasRoute");
const RouterPaises = require("./Routes/PaisesRoute")

const app = express();
const port = 3015;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.json());

app.use("/api/route", RouterPersonas)
app.use("/api/route", RouterPaises)

app.listen(port, ()=>{
    console.log("Se ha refresco el sitio en el puerto:", port);
})