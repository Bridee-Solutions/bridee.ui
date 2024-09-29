import styles from "./Login.module.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiMail, CiLock } from "react-icons/ci";
import { GoogleLogin } from "@react-oauth/google";
import LateralImage from "../../component/LoginLateralImage";
import { jwtDecode } from "jwt-decode";
import { request } from "../../config/axios/axios";
import { useRef } from "react";
import { toast } from "react-toastify";

const Login = () =>{

    const navigate = useNavigate()

    const email = useRef();
    const senha = useRef();

    const authenticate = () => {
        const usuario = {
            email: email.current.value,
            senha: senha.current.value
        }
        request.authenticate(usuario).then(response => {
            if(response.status == 200){
                navigate("/dashboard")
            }
        }).catch(error => {
            toast.error(error.response.data.message)
        })
    }

    const googleSuccessLogin = (response) => {
        const tokenDetails = jwtDecode(response.credential)
        const userEmail = tokenDetails.email
        
        request.verifyUserEmail(userEmail).then(res => {
            localStorage.setItem("access_token", response.credential)
            navigate(`/dashboard`)
        }).catch(erro => {
            navigate(`/cadastrar#${userEmail}`)
        })
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return(
        <div className={styles.login_body}>
           <LateralImage/>            
           <div className={styles.login_container}>
                <div className={styles.login_header}>
                    <div className={styles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={() => navigate("/")}/>
                    </div>
                    <div className={styles.login_header_text}>
                        <p>Não tem uma conta?</p> <Link to={`/cadastrar`}>Cadastre-se</Link>
                    </div>
                </div>
                <div className={styles.login_content}>
                    <div className={styles.login_content_header}>
                        <h1>bridee.</h1>
                        <p>O match perfeito para o dia dos seus sonhos</p>
                    </div>
                    <div className={styles.login_content_body}>
                        <h4>Bem vindo de volta!</h4>
                        <div className={styles.login_inputs}>
                            <div style={{position: "relative"}}>
                                <CiMail className={styles.login_inputs_icon}/>
                                <input type="text" ref={email}/>
                            </div>
                            <div style={{position: "relative"}}>
                                <CiLock className={styles.login_inputs_icon}/>
                                <input type="password" ref={senha}/>
                            </div>
                        </div>
                        <div className={styles.login_content_button}>
                            <Link to={`/recuperar-senha`}>Esqueceu a senha?</Link>
                            <button onClick={authenticate}>Entrar</button>
                            <span>ou</span>
                            <div className={styles.google_button}>
                                <GoogleLogin onSuccess={googleSuccessLogin} onError={errorMessage}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.login_content_footer}>
                        <p>Você é um assessor?</p> 
                        <Link to={"/cadastrar-assessor"}>Clique aqui.</Link>    
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;