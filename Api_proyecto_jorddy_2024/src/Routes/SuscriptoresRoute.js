const express = require("express");
const router = express.Router();
const accesoController = require("../Controllers/SuscriptoresController");

router
    .get ("/ObtenerSuscriptores", accesoController.ObtenerSuscriptores)


module.exports = router;

