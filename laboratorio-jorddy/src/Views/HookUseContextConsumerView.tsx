import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const HookuseContextConsumerView: React.FC = () =>
{
    const context = useContext(MyContext)

    if (!context){
        return <div>Error, contexto no disponible</div>
    }

    const { value, setValue } = context;

    return (
        <div>
            <h1>Hola</h1>
            <h3>Valor actual es: {value}</h3>
            <button className="btn btn-success" onClick={() => setValue("Nuevo valor")}>Agregar Contexto</button>
        </div >
    )
}

export default HookuseContextConsumerView;