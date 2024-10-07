import { useEffect, useRef } from "react";
import EmailSent from "../../componentes/Cadastro/email/Email";
import LateralImage from "../../componentes/LoginLateralImage";
import styles from "./ReenviarEmail.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/axios/axios";

const ReenviarEmail = () => {

    const email = useRef(window.location.hash.substring(1))
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = email.current
        const urlWithoutHash = window.location.href.split("#")[0]
        window.history.replaceState({}, document.title, urlWithoutHash)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!userEmail || !emailRegex.test(userEmail)){
            navigate("/login")
        }
        request.verifyUserEmail(email.current).then((response) => {
            if(response.status == 200){
                if(response.data.enabled){                    
                    navigate("/login")
                }
            }
        }).catch(() => {
            navigate("/login")
        })
    }, [])

    return(
        <div className={styles.email}>
            <LateralImage/>
            <div className={styles.email_container}>
                <div className={styles.email_header}>
                    <h1>bridee.</h1>
                    <p>O match perfeito para o dia dos seus sonhos</p>
                </div>
                <EmailSent tipo={"errado"} titulo={"Confirmação expirada"} haveButton={true} email={email.current}/>
            </div>
        </div>
    );

}

export default ReenviarEmail;