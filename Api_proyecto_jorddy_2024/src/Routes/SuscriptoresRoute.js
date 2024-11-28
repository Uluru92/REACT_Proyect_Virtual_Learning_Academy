const express = require("express");
const router = express.Router();
const accesoController = require("../Controllers/SuscriptoresController");

router
    .get("/ObtenerSuscriptores", accesoController.ObtenerSuscripciones)
    .post("/RegistrarNuevoSuscriptor", accesoController.GuardarSuscripcion)

module.exports = router;

