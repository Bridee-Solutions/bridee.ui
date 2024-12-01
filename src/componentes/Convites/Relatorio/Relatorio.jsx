import { useEffect, useRef } from "react";
import styles from "./Relatorio.module.css";

const Relatorio = (props) => {

    const inviteBar = useRef();

    const defineColor = (tipo) =>{

        if(props.quantidade != undefined){
            inviteBar.current.style.width = `${(props.quantidade/props.total) * 100}%`
            inviteBar.current.style.padding = `1% 0`;
            inviteBar.current.style.borderRadius = `15px`;
            console.log(inviteBar.current.style.width);
            
            if(tipo == "Sem Resposta"){
                inviteBar.current.style.backgroundColor = `yellow`;
            }else if(tipo == "Confirmado"){
                inviteBar.current.style.backgroundColor = `green`;
            }else if(tipo == "Recusado"){
                inviteBar.current.style.backgroundColor = `red`;
            }else{
                inviteBar.current.style.width = `100%`
                inviteBar.current.style.display = `flex`
    
                const divSemResposta = document.createElement("div");
                const divConfirmado = document.createElement("div");
                const divRecusado = document.createElement("div");
    
                divSemResposta.style.width = `${(props.semResposta/props.total) * 100}%`
                divSemResposta.style.backgroundColor = `yellow`;
                divSemResposta.style.padding = `1%`;
                divSemResposta.style.borderTopLeftRadius = `15px`;
                divSemResposta.style.borderBottomLeftRadius = `15px`;
    
                divConfirmado.style.width = `${(props.confirmado/props.total) * 100}%`
                divConfirmado.style.backgroundColor = `green`
                divConfirmado.style.borderTopRightRadius = `15px`;
                divConfirmado.style.borderBottomRightRadius = `15px`;
                
                divRecusado.style.width = `${(props.recusado/props.total) * 100}%`
                divRecusado.style.backgroundColor = `red` ;
    
                inviteBar.current.appendChild(divSemResposta);
                inviteBar.current.appendChild(divRecusado);
                inviteBar.current.appendChild(divConfirmado);
            }
        }
        
    }

    useEffect(() => {
        defineColor(props.tipo)
    }, [props.quantidade])

    return(
        <div className={styles.relatorio}>
            <p>{props.tipo}</p>
            <span>{props.quantidade}</span>
            <div ref={inviteBar}></div>
        </div>
    )
}

export default Relatorio;