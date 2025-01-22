import { createContext,useState } from "react";
import text from '../assets/text.json'
export const LangContext = createContext();



export function LangProvider({children}){
    const [lang,langSwitch] = useState("en")
    
    const providerValue={
        lang,
        langSwitch,
        
    }
    return(
        <LangContext.Provider value={providerValue}>
            {children}
        </LangContext.Provider>
    )

}