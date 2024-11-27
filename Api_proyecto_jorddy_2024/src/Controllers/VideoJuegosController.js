const accesoBD = require("../DataBase/VideoJuegos");
const ObtenerVideosJuegosPorConsola  = (req, res) =>
{
    const detalle = accesoBD.ObtenerVideosJuegosPorConsola();
    const DetalleRespuesta = 
    {
        Codigo : 0,
        Descripcion: "Transacción Exitosa",
        Detalle: detalle
    }
    res.send(DetalleRespuesta);
}
module.exports = {
    ObtenerVideosJuegosPorConsola 
};