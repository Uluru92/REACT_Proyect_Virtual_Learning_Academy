import React from "react";
import { MyProvider } from "../MyContext";
import LoginComponent from "../Components/LoginComponent";

const HookuseContextConsumerView: React.FC = () =>
{
    return (
        <div>
            <MyProvider>
                <LoginComponent></LoginComponent>
            </MyProvider>
        </div >
    )
}

export default HookuseContextConsumerView;
