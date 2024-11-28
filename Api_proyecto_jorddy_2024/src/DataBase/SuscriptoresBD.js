const path= require('path');
const fs= require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/SuscriptoresBD.json');

const ObtenerSuscriptores = () =>
{
    try
    {
        let lista = require(db_archivo_directorio);
        return lista.Suscriptores;
    }
    catch(error)
    {
        return error;
    }
}

module.exports = {
    ObtenerSuscriptores
}