const express = require("express");
const router = express.Router();
const controladorPersonas = require("../Controllers/PersonasController");

router
    .get ("/ObtenerTodasLasPersonas", controladorPersonas.ObtenerTodasLasPersonas)
    .post ("/ValidarCredencialesLogin", controladorPersonas.ValidarCredencialesLogin)
    .post ("/RegistrarNuevaPersona", controladorPersonas.GuardarPersona)
    .post("/EliminarPersona", controladorPersonas.EliminarPersona)
    .post("/EditarPersona",controladorPersonas.EditarPersona)

module.exports = router;

