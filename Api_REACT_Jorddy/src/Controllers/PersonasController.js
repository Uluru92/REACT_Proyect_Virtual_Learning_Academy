const personasBD = require("../DataBase/PersonasBD");


const ObtenerTodasLasPersonas = (req, res) =>
    {
        const TodasLasPersonas = personasBD.ObtenerTodasLasPersonas();
        res.send({ DetalleRespuesta:TodasLasPersonas });
    }

const ValidarCredencialesLogin = (req,res)=>
    {
        const informacionUsuario = req.body;
        const TodasLasPersonas = personasBD.ObtenerTodasLasPersonas();
        const existeUsuario = TodasLasPersonas.some(tx => tx.userName === informacionUsuario.userName
                                                        && tx.passWord === informacionUsuario.passWord);

        let codigoDeRespuesta = 0;
        let descripcionRespuesta = "Acceso Permitido";

        if(!existeUsuario)
        {
            codigoDeRespuesta = 99;
            descripcionRespuesta = "Acceso Denegado";
        }

        const DetalleRespuesta= 
        {
            Codigo : codigoDeRespuesta,
            Descripcion : descripcionRespuesta
        }

        res.send(DetalleRespuesta);
    }

const GuardarPersona = (req, res)=>
    {
        const informacionUsuario = req.body;
        const TodasLasPersonas = personasBD.ObtenerTodasLasPersonas();
        const existeUsuario = TodasLasPersonas.some(tx => tx.userName === informacionUsuario.userName
                                                        && tx.passWord === informacionUsuario.passWord);
                           
        let codigoDeRespuesta = 98;
        let descripcionRespuesta = "Usuario ya existe";

        if(!existeUsuario)
        {
            personasBD.GuardarPersona(informacionUsuario);
            codigoDeRespuesta = 0;
            descripcionRespuesta = "Persona Registrada";
        }

        const DetalleRespuesta= 
        {
            Codigo : codigoDeRespuesta,
            Descripcion : descripcionRespuesta
        }

        res.send(DetalleRespuesta);
    }

const EliminarPersona = (req, res) =>
    {
        const informacionUsuario = req.body;
        const TodasLasPersonas = personasBD.ObtenerTodasLasPersonas();
        const existeUsuario = TodasLasPersonas.some(tx => tx.userName === informacionUsuario.userName);
                           
        let codigoDeRespuesta = 97;
        let descripcionRespuesta = "Usuario no existe";

        if(existeUsuario)
        {
            personasBD.EliminarPersona(informacionUsuario);
            codigoDeRespuesta = 0;
            descripcionRespuesta = "Persona Eliminada";
        }

        const DetalleRespuesta= 
        {
            Codigo : codigoDeRespuesta,
            Descripcion : descripcionRespuesta
        }

        res.send(DetalleRespuesta);
    }

const EditarPersona = (req, res) =>

{
    const informacionUsuario = req.body;
    const TodasLasPersonas = personasBD.ObtenerTodasLasPersonas();
    const existeUsuario = TodasLasPersonas.some(tx => tx.userName === informacionUsuario.userName);

    let codigoDeRespuesta = 96;
    let descripcionRespuesta = "Usuario no existe";

    if (existeUsuario) {
        personasBD.EditarPersona(informacionUsuario);
        codigoDeRespuesta = 0;
        descripcionRespuesta = "Persona Editada";
    }

    const DetalleRespuesta =
    {
        Codigo: codigoDeRespuesta,
        Descripcion: descripcionRespuesta
    }

    res.send(DetalleRespuesta);
}


module.exports = {
    ObtenerTodasLasPersonas,
    ValidarCredencialesLogin,
    GuardarPersona,
    EliminarPersona,
    EditarPersona
};