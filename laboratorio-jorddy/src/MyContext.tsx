import React, { useState, createContext, ReactNode } from "react";

const MyContext = createContext<{ value: string; setValue: React.Dispatch<React.SetStateAction<string>>}| undefined>(undefined);;

const MyProvider : React.FC<{children:ReactNode}> = ({children}) =>
    {
        const [value, setValue] = useState("Hello World");

        return (
            <MyContext.Provider value={{ value, setValue }}>
                {children}
            </MyContext.Provider>
        )
    }

export {MyContext, MyProvider}