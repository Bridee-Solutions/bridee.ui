import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decrypt } from "../utils/criptografia";


const AssessorContext = createContext()

export const AssessorContextProvider = ({children}) => {

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
    const navigate = useNavigate()
    
    useEffect(() => {        
        const pathname = location.pathname;
        const rotasPaths = rotasComuns.map(rota => rota.path)
        
        if(pathname == "/login" && authenticated){
            navigate("/painel")
        }

        if(rotasPaths.includes(pathname)){
            return;
        }
        
        if(tipoUsuario != "ASSESSOR" || !authenticated){
            navigate("/login")
        }
    },[])

    return(
        <AssessorContext.Provider>
            {children}
        </AssessorContext.Provider>
    )

}