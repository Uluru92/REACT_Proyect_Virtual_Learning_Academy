const path= require('path');
const fs= require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/PaisesBD.json');

const ObtenerTodosLosPaises = () =>
{
    try
    {
        let informacionPaises = require(db_archivo_directorio);
        return informacionPaises.PaisesRegistrados;
    }
    catch(error)
    {
        return error;
    }
}

module.exports = {
    ObtenerTodosLosPaises
}