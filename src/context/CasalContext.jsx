import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react"

const CasalContext = createContext()

export const CasalContextProvider = ({children}) => {
    
    const [casamentoId, setCasamentoId] = useState(() => {
        const sessionCasamentoIdValue = localStorage.getItem("casamentoId");
        if(sessionCasamentoIdValue != undefined){
            return sessionCasamentoIdValue;
        }
    });
    const [tipoUsuario, setTipoUsuario] = useState(() => {
        const sessionTipoUsuarioValue = localStorage.getItem("tipoUsuario");
        if(sessionTipoUsuarioValue != undefined) {
            return sessionTipoUsuarioValue
        }
    });
    const [authenticated, setAuthenticated] = useState(() => {
        const sessionIsAuthenticated = localStorage.getItem("isAuthenticated");
        if(sessionIsAuthenticated != undefined){
            return sessionIsAuthenticated
        }
    });
    const [convites, setConvites] = useState();
    const navigate = useNavigate()
    
    useEffect(() => {        
        // if(tipoUsuario != "CASAL" || !authenticated){
        //     navigate("/login")
        // }
    },[])

    return <CasalContext.Provider value={{casamentoId, setCasamentoId, 
        tipoUsuario, setTipoUsuario, authenticated, setAuthenticated}}>
        {children}
    </CasalContext.Provider>

}