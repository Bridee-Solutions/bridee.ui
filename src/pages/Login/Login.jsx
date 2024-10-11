import styles from "./Login.module.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiMail, CiLock } from "react-icons/ci";
import { GoogleLogin } from "@react-oauth/google";
import LateralImage from "../../componentes/LoginLateralImage";
import { jwtDecode } from "jwt-decode";
import { request } from "../../config/axios/axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { buildObjectFromQueryParam } from "../Cadastro/fases";

const Login = () =>{

    const navigate = useNavigate()

    const email = useRef();
    const senha = useRef();
    const tipo = useRef()
    const[oldTipo, setTipo] = useState()
    const esqueceuSenhaElement = useRef()

    const authenticate = () => {
        const usuario = {
            email: email.current.value,
            senha: senha.current.value
        }
        if(usuario.email.trim() == "" || usuario.senha.trim() == ""){
            toast.error("Usuário ou senha inválidos")
            return;
        }
        request.authenticate(usuario).then(response => {
            if(response.status == 200){
                if(response.data.enabled){
                    navigate("/dashboard")
                }else{
                    toast.error("Ative a conta antes de conseguir logar")
                }
            }
        }).catch(error => {
            toast.error("Usuário ou senha inválidos")
        })
    }

    const googleSuccessLogin = (response) => {
        const tokenDetails = jwtDecode(response.credential)
        const userEmail = tokenDetails.email
        
        request.verifyUserEmail(userEmail).then(res => {
            localStorage.setItem("access_token", response.credential)
            navigate(`/dashboard`)
        }).catch(erro => {
            if(tipo.current == "assessor"){
                navigate(`/cadastrar?email=${userEmail}&tipo=assessor`)
                return
            }
            navigate(`/cadastrar?email=${userEmail}`)
        })
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const alterarLogin = () => {
        if(tipo.current == "assessor"){
            window.location.href = `${window.location.href}?tipo=casal`
            return
        }
        window.location.href = `${window.location.href}?tipo=assessor`
    }

    const marginTopAssessor = () => {
        esqueceuSenhaElement.current.style.marginTop = tipo.current == "assessor" ? "4%" : "0%"
    }

    useEffect(() => {
        if(tipo.current == undefined){
            const queryParamObject = buildObjectFromQueryParam(window)
            tipo.current = queryParamObject.tipo
            console.log(tipo.current);
            marginTopAssessor()
            setTipo("")
        }
    }, [])

    return(
        <div className={styles.login_body}>
           <LateralImage/>            
           <div className={styles.login_container}>
                <div className={styles.login_header}>
                    <div className={styles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={() => navigate("/")}/>
                    </div>
                    <div className={styles.login_header_text}>
                        <p>Não tem uma conta?</p> {tipo.current == "assessor" ? 
                            <Link to={`/cadastrar?tipo=assessor`}>Cadastre-se</Link>
                            : 
                            <Link to={`/cadastrar`}>Cadastre-se</Link>
                            }
                    </div>
                </div>
                <div className={styles.login_content}>
                    <div className={styles.login_content_header}>
                        <h1>bridee.</h1>
                        {tipo.current == "assessor" ? 
                            <p>Conecte-se com casais e construa celebrações memoráveis.</p>
                            :
                            <p>O match perfeito para o dia dos seus sonhos</p>
                        }
                    </div>
                    <div className={styles.login_content_body}>
                        {tipo.current == "assessor" ? 
                            <h4>Entre para atualizar seu perfil de assessor e colaborar com clientes.</h4>
                            :
                            <h4>Bem vindo de volta!</h4>
                        }
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
                            <Link to={`/recuperar-senha`} ref={esqueceuSenhaElement}>Esqueceu a senha?</Link>
                            <button onClick={authenticate}>Entrar</button>
                            <span>ou</span>
                            <div className={styles.google_button}>
                                <GoogleLogin onSuccess={googleSuccessLogin} onError={errorMessage}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.login_content_footer}>
                        {tipo.current == "assessor" ? 
                            <div>
                                <p>Você é um casal?</p> 
                                <Link onClick={alterarLogin}>Clique aqui.</Link>
                            </div>
                            :
                            <div>
                                <p>Você é um assessor?</p> 
                                <Link onClick={alterarLogin}>Clique aqui.</Link>    
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Login;