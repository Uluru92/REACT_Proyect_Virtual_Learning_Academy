const accesoBD = require("../DataBase/VideoJuegos");


const ObtenerVideosJuegosPorConsola  = (req, res) =>
{
    const idConsola = req.body;

    console.log(idConsola)
    const detalle = accesoBD.ObtenerVideosJuegosPorConsola();
    console.log(detalle)
    const consolasFiltradas = detalle.filter(vd => vd.id_consola === idConsola.id);

    const DetalleRespuesta = 
    {
        Codigo : 0,
        Descripcion: "Transacción Exitosa",
        Detalle: consolasFiltradas
    }

    res.send(DetalleRespuesta);
}


module.exports = {
    ObtenerVideosJuegosPorConsola 
};