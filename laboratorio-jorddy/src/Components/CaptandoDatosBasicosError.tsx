import { useRef, useState } from "react";

const CaptandoDatosBasicosError: React.FC = () =>
{
    const [mensaje, setMensaje] = useState<string>("");
    const [mostrarMensaje, setMostrarMensaje] = useState<boolean>(false);

    const inputNombre = useRef<HTMLInputElement | null>(null);
    const inputApellido1 = useRef<HTMLInputElement | null>(null);
    const inputApellido2 = useRef<HTMLInputElement | null>(null);

    function ValidarCampo()
    {
        let banderaError: boolean = false;
        let mensaje: string = "";

        console.log(inputNombre.current?.value)
        console.log(inputApellido1.current?.value)
        console.log(inputApellido2.current?.value)

        if (!inputNombre.current?.value) {
            mensaje = "Problemas con nombre";
            banderaError = true;
        }
        if (!inputApellido1.current?.value) {
            mensaje += "Problemas con Apellido 1";
            banderaError = true;
        }
        if (!inputApellido2.current?.value) {
            mensaje += "Problemas con Apellido 2"
            banderaError = true;
        }
        setMensaje(mensaje);
        setMostrarMensaje(banderaError);
    }

    return (
        <div className="container">
            <h1>Ejercicio de Use Ref 1 Mala practica</h1>
            <input
                className="form-control"
                placeholder="Digite el nombre"
                type="text"
                ref={inputNombre}></input>
            <br />
            <input
                className="form-control"
                placeholder="Digite su primer apellido"
                type="text"
                ref={inputApellido1}></input>
            <br />
            <input
                className="form-control"
                placeholder="Digite su segundo apellido"
                type="text"
                ref={inputApellido2}></input>
            <br />
            <button onClick={ValidarCampo} className="btn btn-primary">Aceptar</button>
            {
                mostrarMensaje && <p>{mensaje}</p>                    
            }
        </div>
    )
}


export default CaptandoDatosBasicosError;