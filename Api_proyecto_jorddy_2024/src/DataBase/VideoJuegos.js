const path= require('path');
const fs= require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/VideoJuegos.json');

const ObtenerVideosJuegosPorConsola = () =>
{
    try
    {
        let lista = require(db_archivo_directorio);
        return lista.VideoJuegos;
    }
    catch(error)
    {
        return error;
    }
}

module.exports = {
    ObtenerVideosJuegosPorConsola 
}