import React from "react";
import HookuseContextConsumerView from "./HookUseContextConsumerView";

const HookuseContextProviderView: React.FC = () =>
{
    return (
        <div>
            <h1>Componente A</h1>
            <HookuseContextConsumerView></HookuseContextConsumerView>
        </div >
    )
}

export default HookuseContextProviderView;