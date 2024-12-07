import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { decrypt, encrypt } from "../utils/criptografia";
import { rotasComuns } from "./Context";

export const CasalContext = createContext()

export const CasalContextProvider = ({children, ...props}) => {
    
    const [convites, setConvites] = useState();
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

    return <CasalContext.Provider value={{casamentoId: props.casamentoId, convites: convites, setConvites: setConvites}}>
        {children}
    </CasalContext.Provider>

}