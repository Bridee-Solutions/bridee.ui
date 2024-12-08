import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { decrypt, encrypt } from "../utils/criptografia";
import { rotasComuns } from "./Context";

export const CasalContext = createContext()

export const CasalContextProvider = ({children, ...props}) => {
    
    const [convites, setConvites] = useState();
    const [casamentoId, setCasamentoId] = useState(() => {
        return decrypt(localStorage.getItem("casamentoId") ? 
            localStorage.getItem("casamentoId") : "");
    })
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const rotasPaths = rotasComuns.map(rota => rota.path)
        
        if(pathname == "/login" && props.authenticated){
            navigate("/painel")
        }

        if(rotasPaths.includes(pathname)){
            return;
        }
        
        if(!props.tipoUsuario || props.tipoUsuario != "CASAL" || !props.authenticated){
            navigate("/login")
        }
    },[])

    return <CasalContext.Provider value={{casamentoId: casamentoId, setCasamentoId: setCasamentoId, convites: convites, setConvites: setConvites}}>
        {children}
    </CasalContext.Provider>

}