const path = require('path');
const fs = require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/SuscriptoresBD.json');

const ObtenerSuscriptores = () =>
{
    try
    {
        let informacionSuscriptores = require(db_archivo_directorio);
        return informacionSuscriptores.Suscriptores;
    }
    catch(error)
    {
        return error;
    }
}

const GuardarSuscripcion= (suscriptor) => {
    try
    {
        let informacionSuscriptor = require(db_archivo_directorio);
        informacionSuscriptor.Suscriptores.push(suscriptor);
        fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionSuscriptor, null, 2))
    }
    catch (error)
    {
        return error;
    }
}

module.exports = {
    ObtenerSuscriptores,
    GuardarSuscripcion
}