import { toast } from "react-toastify"
import { request } from "../../../config/axios/axios"
import styles from "./Email.module.css"
import { useEffect, useRef } from "react"

export const EmailSent = (props) => {

    const mainDiv = useRef();

    const resendEmail = () => {        
        request.resendVerificationEmail(props.email)
        .then(() => {
            toast.success("E-mail enviado com sucesso!")
        })
    }

    useEffect(() => {
        if(mainDiv.current != undefined){
            mainDiv.current.style.marginTop = props.haveButton ? "0%" : "5%"
        }
    },[])

    return(
        <div className={styles.email} ref={mainDiv}>
            <div className={styles.email_content}>
                <div className={styles.email_header}>
                    <h2>{props.titulo}</h2>
                    <hr />
                </div>
                <div className={styles.email_body}>
                    <img src={`/src/assets/${props.tipo}.svg`} alt="" />
                </div>
                <div className={styles.email_footer}>
                    {
                        props.haveButton ? 
                        (<div className={styles.email_footer_text}>
                            <p>O link de confirmação enviado para {props.email} expirou. Por favor, solicite um novo e-mail de confirmação para validar seu endereço de e-mail e concluir o seu registro.</p>
                            <div>
                                <button onClick={resendEmail} className={styles.email_button}>Enviar email</button>
                            </div>
                        </div>):
                        (<div className={styles.email_footer_text}>
                            <p>Enviamos um e-mail para {props.email} para confirmar a validade do seu endereço de e-mail. Após receber o e-mail, siga o link fornecido para completar o seu registro.</p>
                            <p>Se você não recebeu o e-mail, clique <span onClick={resendEmail}>aqui</span> para reenviar.</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )

}

export default EmailSent;