//Acá importamos otros componentes o librearias
import React, {useContext} from "react";
import {MyContext} from "../MyContext";


const HookUseStateView: React.FC = () =>
{
    const context = useContext(MyContext)

    if (!context)
        return <div>Error, no hay contexto</div>
    
    const { value } = context;
    
    return (
        <div>
            <h2>Desde el Use State, el valor del contexto es:</h2>
            <h3>{value}</h3>
        </div >
    )
}

export default HookUseStateView;