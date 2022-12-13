import { createContext, useState } from "react";

export const MainContext = createContext([]);

export function MainProvider({children}){

    const [stringEx, setStringEx] = useState("ex");

    return (
        <MainContext.Provider value={{stringEx, setStringEx}}>
            {children}
        </MainContext.Provider>
    )
};