import { useEffect, useState } from "react";

const MensajesOcultosComponent: React.FC = () =>
{
    const [mostrarMensaje, setMostrarMensaje] = useState(false)

    function GuardarPersona() {
        setMostrarMensaje(!mostrarMensaje);
        console.log("Hemos entrado al guardar persona")
    }

    function PersonaEliminada() {
        console.log("Hemos entrado al eliminar persona")
    }

    useEffect(()=> {
        console.log("Hemos encontrado alguna modificacion en el DOM o en la variable")
    }, [mostrarMensaje])

    return (
        <div className="container">
            <h3>Ejercicio Hook 1</h3>
            <h4>{mostrarMensaje}</h4>
            <button onClick={GuardarPersona} className="btn btn-success">Guardar</button>
            <button onClick={PersonaEliminada} className="btn btn-success">Eliminar</button>
        </div >
    )
}

export default MensajesOcultosComponent;