import React, { useEffect, useState } from "react";

const CronometroComponent: React.FC = () => 
{
    const [segundos, setSegundos] = useState(0);
    const [intervaloID, setintervaloID] = useState(null)
    const [iniciarConteo, setIniciarConteo] = useState<Boolean>(false);

    function Iniciar() {
        setIniciarConteo(true);
    }

    function Parar() {
        setIniciarConteo(false);
    }

    useEffect(() => {
        let intervalo: NodeJS.Timeout|undefined;

        if (iniciarConteo)
            {
            intervalo = setInterval(() => {
                setSegundos((segundos)=>segundos+1)
                },1000)
            }
        else
            {
                clearInterval(intervalo)
            }
    },[iniciarConteo])

    return (
        <div className="container">
            <h3>Ejercicio Hook 3</h3>
            <h3>{segundos}</h3>
            <button onClick={Iniciar} className="btn btn-warning">Iniciar cronometro</button>
            <button onClick={Parar} className="btn btn-danger">Para cronometro</button>
        </div >
    )
}

export default CronometroComponent;