import { useEffect, useRef } from "react";
import EmailSent from "../../component/Cadastro/email/Email";
import LateralImage from "../../component/LoginLateralImage";
import styles from "./ReenviarEmail.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReenviarEmail = () => {

    const email = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        if(email.current == undefined){
            email.current = window.location.hash.substring(1);
            const urlWithoutHash = window.location.href.split("#")[0]
            window.history.replaceState({}, document.title, urlWithoutHash)
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            console.log(email.current, emailRegex.test(email.current));
            if(email.current.trim() == "" || !emailRegex.test(email.current)){
                navigate("/login")
                return
            }
        }
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