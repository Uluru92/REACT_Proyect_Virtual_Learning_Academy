const paisesBD = require("../DataBase/PaisesBD");


const ObtenerTodosLosPaises = (req, res) =>
    {
        const TodosLosPaises = paisesBD.ObtenerTodosLosPaises();
        res.send({ DetalleRespuesta:TodosLosPaises });
    }

module.exports = {
    ObtenerTodosLosPaises
}