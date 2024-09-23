import styles from "../../../pages/Login/Login.module.css"
import fase1Style from "./Fase1.module.css";
import { Link } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { GoogleLogin } from "@react-oauth/google";


const Fase1 = () => {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return(
        <div className={fase1Style.fase1_content}>
            <div className={styles.login_content_header}>
                <h1>Bridee.</h1>
                <p>O match perfeito para o dia dos seus sonhos</p>
            </div>
            <div className={fase1Style.fase1_content_body}>
                <h4>Crie uma conta e comece a planejar seu casamento!</h4>
                <div className={styles.login_inputs}>
                    <div style={{position: "relative"}}>
                        <CiMail className={styles.login_inputs_icon}/>
                        <input type="text" placeholder="Digite o e-mail"/>
                    </div>
                    <div style={{position: "relative"}}>
                        <CiLock className={styles.login_inputs_icon}/>
                        <input type="password" placeholder="Digite a senha"/>
                    </div>
                    <div style={{position: "relative"}}>
                        <CiLock className={styles.login_inputs_icon}/>
                        <input type="password" placeholder="Confirme a senha"/>
                    </div>
                </div>
                <div className={fase1Style.fase1_button}>
                    <button>Criar Conta</button>
                    <span>ou</span>
                    <div className={styles.google_button}>
                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
                    </div>
                </div>
                <div className={fase1Style.fase1_footer}>
                    <p>Você é um assessor?</p> 
                    <Link to={"/cadastrar-assessor"}>Clique aqui.</Link>    
                </div>
            </div>
        </div>
    );

}

export default Fase1;