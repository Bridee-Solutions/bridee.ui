import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decrypt, encrypt } from "../utils/criptografia";

const CasalContext = createContext()

export const CasalContextProvider = ({children}) => {
    
    const [casamentoId, setCasamentoId] = useState(() => {
        const sessionCasamentoIdValue = localStorage.getItem("casamentoId");
        if(sessionCasamentoIdValue != undefined){
            return decrypt(sessionCasamentoIdValue);
        }
    });
    const [tipoUsuario, setTipoUsuario] = useState(() => {
        const sessionTipoUsuarioValue = localStorage.getItem("tipoUsuario");
        if(sessionTipoUsuarioValue != undefined) {
            return decrypt(sessionTipoUsuarioValue)
        }
    });
    const [authenticated, setAuthenticated] = useState(() => {
        const sessionIsAuthenticated = localStorage.getItem("isAuthenticated");
        if(sessionIsAuthenticated != undefined){
            return decrypt(sessionIsAuthenticated)
        }
    });
    const [convites, setConvites] = useState();
    const navigate = useNavigate()
    
    useEffect(() => {        
        if(tipoUsuario != "CASAL" || !authenticated){
            navigate("/login")
        }
    },[])

    return <CasalContext.Provider value={{casamentoId, setCasamentoId, 
        tipoUsuario, setTipoUsuario, authenticated, setAuthenticated}}>
        {children}
    </CasalContext.Provider>

}