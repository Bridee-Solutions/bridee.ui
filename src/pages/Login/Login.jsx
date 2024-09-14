import styles from "./Login.module.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail, CiLock } from "react-icons/ci";

const Login = () =>{

    return(
        <div className={styles.login_body}>
            <div className={styles.login_img}>
                <img src="/src/assets/foto.svg" alt="" />
            </div>
            <div className={styles.login_container}>
                <div className={styles.login_header}>
                    <div className={styles.login_header_icon}>
                        <FaLongArrowAltLeft />
                    </div>
                    <div className={styles.login_header_text}>
                        <p>Não tem uma conta?</p> <Link to={`/cadastrar`}>Cadastre-se</Link>
                    </div>
                </div>
                <div className={styles.login_content}>
                    <div className={styles.login_content_header}>
                        <h1>Bridee.</h1>
                        <p>O match perfeito para o dia dos seus sonhos</p>
                    </div>
                    <div className={styles.login_content_body}>
                        <h4>Bem vindo de volta!</h4>
                        <div className={styles.login_inputs}>
                            <div style={{position: "relative"}}>
                                <CiMail className={styles.login_inputs_icon}/>
                                <input type="text"/>
                            </div>
                            <div style={{position: "relative"}}>
                                <CiLock className={styles.login_inputs_icon}/>
                                <input type="password" />
                            </div>
                                
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );

}


export default Login;