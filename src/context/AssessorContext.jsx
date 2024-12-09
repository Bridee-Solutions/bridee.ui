import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rotasComuns } from "./Context";
import { decrypt } from "../utils/criptografia";


export const AssessorContext = createContext()

export const AssessorContextProvider = ({children, ...props}) => {

    const navigate = useNavigate()
    const [assessorId, setAssessorId] = useState(() => {
        return decrypt(localStorage.getItem("assessorId") ? 
            localStorage.getItem("assessorId") : "");
    })
    
    useEffect(() => {        
        const pathname = location.pathname;
        const rotasPaths = rotasComuns.map(rota => rota.path)
        
        if(pathname == "/login" && props.authenticated){
            navigate("/configuracoes-assessor")
        }

        if(rotasPaths.includes(pathname)){
            return;
        }
        
        if(!props.tipoUsuario || props.tipoUsuario != "ASSESSOR" || !props.authenticated){
            navigate("/login")
        }
    },[])

    return(
        <AssessorContext.Provider value={{assessorId: assessorId, setAssessor: setAssessorId, setContext: props.setContext}}>
            {children}
        </AssessorContext.Provider>
    )

}