const express = require("express");
const router = express.Router();
const controladorPaises = require("../Controllers/PaisesController");

router
    .get ("/ObtenerTodosLosPaises", controladorPaises.ObtenerTodosLosPaises)    

module.exports = router;
