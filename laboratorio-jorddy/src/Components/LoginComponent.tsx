import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const LoginComponent: React.FC = () =>
{
    //Uso del contexto, de la clase que creamos
    const context = useContext(MyContext)
    const [usuario, setUsuario] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //variables del login
    if (!context)
        return <div>Error, contexto no disponible</div>
    
    const { value, setValue } = context;

    function ValidarCredenciales()
    {
        //Aca va la logica para el consumo del pai de validar credenciales
        if (usuario === "admin" && password === "12345") {
            setValue("Bienvenido," + usuario)
            alert("Bienvenido")
        }
        else {
            setValue("Credenciales incorrectas")
            alert("Lo sentimos")
        }
    }

    return (
        <div>
            <h1>Digite sus credenciales</h1>
            <input
                className="form-control"
                placeholder="DIgite su usuario"
                value={usuario}
                onChange={(e => setUsuario(e.target.value))}/>
            <br /><br />
            <input
                className="form-control"
                placeholder="DIgite su contraseña"
                value={password}
                onChange={(e => setPassword(e.target.value))}/>
            <br /><br />
            <button className="btn btn-success" onClick={ValidarCredenciales}>Agregar Contexto</button>
        </div >
    )
}

export default LoginComponent;