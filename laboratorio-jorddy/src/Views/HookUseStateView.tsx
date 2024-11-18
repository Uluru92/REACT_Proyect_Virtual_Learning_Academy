//Acá importamos otros componentes o librearias
import React from "react";
import { MyProvider } from "../MyContext";
import HookuseContextConsumerView from "./HookUseContextConsumerView";

const HookUseStateView: React.FC = () =>
{
    return (
        <div>
            <MyProvider>
                <HookuseContextConsumerView></HookuseContextConsumerView>
            </MyProvider>
        </div >
    )
}

export default HookUseStateView;