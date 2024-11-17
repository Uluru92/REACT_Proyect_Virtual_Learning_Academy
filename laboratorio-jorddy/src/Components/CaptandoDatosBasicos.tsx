import { useRef, useState } from "react";

const CaptandoDatosBasicos: React.FC = () =>
{
    const [mostrarMensaje, setMostrarMensaje] = useState<boolean>(false);
    const inputValor = useRef<HTMLInputElement | null>(null);

    function ValidarCampo()
    {
        if (inputValor.current?.value == "")
            setMostrarMensaje(true);
        else
            setMostrarMensaje(false);
    }

    return (
        <div className="container">
            <h1>Ejercicio de Use Ref 1</h1>
            <input className="form-control"
                placeholder="Digite algo"
                type="text"
                ref={inputValor}
            ></input>
            <button onClick={ValidarCampo} className="btn btn-primary">Aceptar</button>
            {
                mostrarMensaje && <p>Mensaje no puede ser vacio</p>                    
                
            }
        </div>
    )
}


export default CaptandoDatosBasicos;