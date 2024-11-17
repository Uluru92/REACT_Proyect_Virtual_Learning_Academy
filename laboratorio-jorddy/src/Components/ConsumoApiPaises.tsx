import axios from "axios";
import { useEffect, useState } from "react";
import { Paises } from "../Models/Paises";
import API_ENDPOINTS from "../Endpoints";

const ComsumoapiPaises: React.FC = () => {
    const [paises, setPaises] = useState<Paises[]>([]);
    const [estaCargando, setEstaCargando] = useState<boolean>(false);

    useEffect(() => {
        const consumoApiPaises = async () =>
        {
            const api_paises = await axios.get(API_ENDPOINTS.obtenerTodosLosPaises);
            setPaises(api_paises.data.DetalleRespuesta);
        }

        consumoApiPaises();
    },[])

    return (
        <div className="container">
            <h3>Ejercicio Hook 4</h3>
            <h4>Los datos del API son:</h4>

            {
                estaCargando ? (
                    <h4>Se esta cargando la informacion</h4>
                ) : (
                    <select className="form-select">
                        <option value='0'>Seleccione un país</option>
                        {
                                paises.map((pais, index)=>(
                                    <option key={index} value={pais.idPais}>{pais.nombrePais}</option>
                                ))
                        }
                    </select>
                )
            }
        </div >
    )
}

export default ComsumoapiPaises;