import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";
import { CredencialesEntrada } from "../Models/Credenciales";
import API_ENDPOINTS from "../Endpoints";

const LoginComponent: React.FC = () =>
{
    //Uso del contexto, de la clase que creamos
    const context = useContext(MyContext)

    //variables del login
    const [usuario, setUsuario] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //variables del login
    if (!context)
        return <div>Error, contexto no disponible</div>
    
    const { value, setValue } = context;

    async function ValidarCredenciales()
    {
        const PersonaCredenciales = new CredencialesEntrada(usuario, password);
        const respuesta = await axios.post(API_ENDPOINTS.ValidarCredencialesLogin, PersonaCredenciales);
        
        //Aca va la logica para el consumo del Api de validar credenciales
        if (respuesta.data.Codigo == 0) {
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