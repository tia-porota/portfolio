import { useContext } from "react";
import { LangContext } from "./langContext";
import text from '../assets/text.json'
import projects from '../assets/projects.json'
import subprojects from '../assets/subproj.json'
export function useLang(){
    const {lang} = useContext(LangContext)
    const T = text[lang]
    const proj = projects[lang]
    const sub = subprojects[lang]
    return{
        T,
        proj,
        sub,
        lang,
    }

}