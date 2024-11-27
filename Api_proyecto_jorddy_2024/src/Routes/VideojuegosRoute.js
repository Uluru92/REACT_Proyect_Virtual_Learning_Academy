const express = require("express");
const router = express.Router();
const accesoController = require("../Controllers/VideoJuegosController");

router
    .get("/ObtenerVideosJuegosPorConsola", accesoController.ObtenerVideosJuegosPorConsola)
   

module.exports = router;

