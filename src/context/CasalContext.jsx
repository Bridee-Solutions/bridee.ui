import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { decrypt } from "../utils/criptografia";
import { assessorRotas, casalRotas, rotasComuns } from "./Context";

export const CasalContext = createContext()

export const CasalContextProvider = ({children}) => {
    
    const [convites, setConvites] = useState();
   
    const tipoUsuario = decrypt(localStorage.getItem("tipoUsuario") ? localStorage.getItem("tipoUsuario") : "");
    const authenticated = decrypt(localStorage.getItem("isAuthenticated") ? localStorage.getItem("isAuthenticated") : "");

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const rotasComunsPaths = rotasComuns.map(rota => rota.path)
        const rotasCasalPaths = casalRotas.map(rota => rota.path);
        const rotasAssessorPaths = assessorRotas.map(rota => rota.path);

        if(pathname == "/login" && authenticated && tipoUsuario == "CASAL"){
            navigate("/painel")
        }

        if(pathname == "/login" && authenticated && tipoUsuario == "ASSESSOR"){
            navigate("/assessores/calendario")
        }
        
        if(rotasComunsPaths.includes(pathname)){
            return;
        }

        if(rotasCasalPaths.includes(pathname) && authenticated && tipoUsuario == "ASSESSOR"){
            navigate("/assessores/calendario")
        }

        if(rotasAssessorPaths.includes(pathname) && authenticated  && tipoUsuario == "CASAL"){
            navigate("/painel")
        }
        
        if(!tipoUsuario || (tipoUsuario != "CASAL" && tipoUsuario != "ASSESSOR") 
            || !authenticated){
            navigate("/login")
        }
    },[])

    return <CasalContext.Provider value={{ convites: convites, setConvites: setConvites}}>
        {children}
    </CasalContext.Provider>

}