import { useEffect, useState } from "react";

const SimulacionApiComponent: React.FC = () =>
{
    const [paises, setPaises] = useState<string[]>([]);
    const [estaCargando, setEstaCargando] = useState<boolean>(false);
    
    useEffect(() => {
        /*Esto es solo para simular una API. luego la implementamos*/
        setEstaCargando(true);

        setTimeout(() => {
            const Api_paises = ['Estados Unidos', 'Canada', 'México', 'Costa Rica', 'Chile'];
            setPaises(Api_paises);
            setEstaCargando(false);
            },10000)       
        },[])
        
    return (
        <div className="container">
            <h3>Ejercicio Hook 2</h3>
            <h4>Los datos del API son:</h4>

            {
                estaCargando ? (
                    <h4>Se esta cargando la informacion</h4>
                ) : (
                        <select className="form-select">
                            <option value='0'>Seleccione un país</option>
                            {
                                paises.map((pais, index) => (
                                    <option key={index}>{pais}</option>
                                ))
                            }
                        </select>      
                )
            }
        </div >
    )
}

export default SimulacionApiComponent;