import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { rotasComuns } from "./Context";


export const AssessorContext = createContext()

export const AssessorContextProvider = ({children, ...props}) => {

    const navigate = useNavigate()
    
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
        <AssessorContext.Provider value={{assessorId: props.assessorId}}>
            {children}
        </AssessorContext.Provider>
    )

}