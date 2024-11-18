import React from "react";
import { MyProvider } from "../MyContext";
import LoginComponent from "../Components/LoginComponent";
import HookUseStateView from "./HookUseStateView";

const HookuseContextConsumerView: React.FC = () =>
{
    return (
        <div>
            <MyProvider>
                <LoginComponent></LoginComponent>
                <HookUseStateView></HookUseStateView>
            </MyProvider>
        </div >
    )
}

export default HookuseContextConsumerView;
