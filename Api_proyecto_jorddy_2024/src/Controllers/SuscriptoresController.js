const accesoBD = require("../DataBase/SuscriptoresBD");
const ObtenerSuscriptores = (req, res) =>
{
    const detalle = accesoBD.ObtenerSuscriptores();
    const DetalleRespuesta =
    {
        Codigo : 0,
        Descripcion: "Transacción Exitosa",
        Detalle: detalle
    }
    res.send(DetalleRespuesta);
}
module.exports = {
    ObtenerSuscriptores
};