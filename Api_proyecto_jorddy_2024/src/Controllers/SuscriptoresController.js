const suscriptoresBD = require("../DataBase/SuscriptoresBD");


const ObtenerSuscripciones = (req, res) =>
    {
    const TodasLasSuscripciones = suscriptoresBD.ObtenerSuscriptores();
    res.send({ DetalleRespuesta: TodasLasSuscripciones });
    }

const GuardarSuscripcion = (req, res) =>
    {
    const informacionSuscripciones = req.body;
    const TodasLasSuscripciones = suscriptoresBD.ObtenerSuscriptores();
    const existeSuscripcion = TodasLasSuscripciones.some(
        tx =>
            tx.nombre === informacionSuscripciones.nombre &&
            tx.correo === informacionSuscripciones.correo &&
            tx.apellido === informacionSuscripciones.apellido &&
            tx.telefono === informacionSuscripciones.telefono);

    let codigoDeRespuesta = 98;
    let descripcionRespuesta = "Suscripcion ya existe";

    if (!existeSuscripcion) {
        suscriptoresBD.GuardarSuscripcion(informacionSuscripciones);
        codigoDeRespuesta = 0;
        descripcionRespuesta = "Suscripcion Registrada";
    }

    const DetalleRespuesta =
    {
        Codigo: codigoDeRespuesta,
        Descripcion: descripcionRespuesta
    }

    res.send(DetalleRespuesta);
}


module.exports = {
    ObtenerSuscripciones,
    GuardarSuscripcion,
};