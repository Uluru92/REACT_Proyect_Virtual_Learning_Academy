const express = require("express");
const router = express.Router();
const accesoController = require("../Controllers/VideoJuegosController");

router
    .post("/ObtenerVideosJuegosPorConsola", accesoController.ObtenerVideosJuegosPorConsola)
   

module.exports = router;

