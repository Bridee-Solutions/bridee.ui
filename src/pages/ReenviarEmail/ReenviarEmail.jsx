import { useEffect, useState } from "react";
import EmailSent from "../../component/Cadastro/email/Email";
import LateralImage from "../../component/LoginLateralImage";
import styles from "./ReenviarEmail.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReenviarEmail = () => {

    const[email, setEmail] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = window.location.hash.substring(1);
        const urlWithoutHash = window.location.href.split("#")[0]
        window.history.replaceState({}, document.title, urlWithoutHash)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!userEmail || !emailRegex.test(userEmail)){
            navigate("/login")
            return
        }   
        setEmail(userEmail)
    }, [])

    return(
        <div className={styles.email}>
            <LateralImage/>
            <div className={styles.email_container}>
                <div className={styles.email_header}>
                    <h1>bridee.</h1>
                    <p>O match perfeito para o dia dos seus sonhos</p>
                </div>
                <EmailSent tipo={"errado"} titulo={"Confirmação expirada"} haveButton={true} email={email}/>
            </div>
        </div>
    );

}

export default ReenviarEmail;