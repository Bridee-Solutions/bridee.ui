import styles from "./Login.module.css";
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
import { encrypt } from "../../utils/criptografia";

const Login = () => {
  const navigate = useNavigate();

  const email = useRef();
  const senha = useRef();
  const tipo = useRef();
  const [oldTipo, setTipo] = useState();
  const esqueceuSenhaElement = useRef();

  const authenticate = () => {
    const usuario = {
      email: email.current.value,
      senha: senha.current.value,
    };
    if (usuario.email.trim() == "" || usuario.senha.trim() == "") {
      toast.error("Usuário ou senha inválidos");
      return;
    }
    request
      .authenticate(usuario)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.enabled) {
            setUserLocalStorage(response.data);
            if(response.data.tipoUsuario == "CASAL"){
              navigate("/painel");
              return;
            }
            navigate("/assessores/calendario")
          } else {
            toast.error("Ative a conta antes de conseguir logar");
          }
        }
      }).catch(err => {
        toast.error("Usuário ou senha inválidos");
      })
  };

  const setUserLocalStorage = (data) => {
    localStorage.setItem("tipoUsuario", encrypt(data.tipoUsuario));
    localStorage.setItem("isAuthenticated", encrypt(true))
  }

  const googleSuccessLogin = (response) => {
    const tokenDetails = jwtDecode(response.credential);
    const userEmail = tokenDetails.email;

    request
      .verifyUserEmail(userEmail)
      .then((res) => {
        localStorage.setItem("access_token", response.credential);
        navigate(`/painel`);
      })
      .catch((erro) => {
        if (tipo.current == "assessor") {
          navigate(`/cadastrar?email=${userEmail}&tipo=assessor`);
          return;
        }
        navigate(`/cadastrar?email=${userEmail}`);
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const alterarLogin = () => {
    if (tipo.current == "assessor") {
      window.location.href = `${window.location.href}?tipo=casal`;
      return;
    }
    window.location.href = `${window.location.href}?tipo=assessor`;
  };

  const marginTopAssessor = () => {
    esqueceuSenhaElement.current.style.marginTop =
      tipo.current == "assessor" ? "4%" : "0%";
  };

  useEffect(() => {
    if (tipo.current == undefined) {
      const queryParamObject = buildObjectFromQueryParam(window);
      tipo.current = queryParamObject.tipo;
      marginTopAssessor();
      setTipo("");
    }
  }, []);

  return (
    <div className={styles.login_body}>
      <LateralImage tipo={tipo.current}/>
      <div className={styles.login_container}>
        <div className={styles.login_header}>
          <div className={styles.login_header_icon}>
            <FaLongArrowAltLeft onClick={() => navigate("/")} />
          </div>
          <div className={styles.login_header_text}>
            <p>Não tem uma conta?</p>{" "}
            {tipo.current == "assessor" ? (
              <Link to={`/cadastrar?tipo=assessor`}>Cadastre-se</Link>
            ) : (
              <Link to={`/cadastrar`}>Cadastre-se</Link>
            )}
          </div>
        </div>
        <div className={styles.login_content}>
          <div className={styles.login_content_header}>
            <div className={styles.titulo}>
              <span>
                bridee<b>.</b>
              </span>
            </div>
            <div className={styles.subtitulo}>
              <div className={styles.contSub}>
                {tipo.current == "assessor" ? (
                  <p>
                    Conecte-se com casais e construa celebrações memoráveis.
                  </p>
                ) : (
                  <p>O match perfeito para o dia dos seus sonhos.</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.login_content_body}>
            {tipo.current == "assessor" ? (
              <div className={styles.containerBemvind}>
                <span>
                Atualize seu perfil de assessor e conecte-se com clientes.
                </span>
              </div>
            ) : (
              <div className={styles.containerBemvind}>
                <span>Bem vindo de volta!</span>
              </div>
            )}
            <div className={styles.login_inputs}>
              <div style={{ position: "relative" }}>
                <CiMail className={styles.login_inputs_icon} />
                <input type="text" ref={email} />
              </div>
              <div style={{ position: "relative" }}>
                <CiLock className={styles.login_inputs_icon} />
                <input type="password" ref={senha} />
              </div>
            </div>
            <div className={styles.login_content_button}>
              <div className={styles.containerSenha}>
                <div className={styles.containerEsquece}>
                  <div className={styles.senhaesq}>
                    <Link to={`/recuperar-senha`} ref={esqueceuSenhaElement}>
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.containerBotao}>
                <div className={styles.conteBt}>
                  <button onClick={authenticate}>Entrar</button>
                </div>
              </div>
              <div className={styles.ou}>
                <span>ou</span>
              </div>
              <div className={styles.google_button}>
                <GoogleLogin
                  onSuccess={googleSuccessLogin}
                  onError={errorMessage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.login_content_footer}>
          {tipo.current == "assessor" ? (
            <div>
              <p>Você é um casal?</p>
              <Link onClick={alterarLogin}>Clique aqui.</Link>
            </div>
          ) : (
            <div>
              <p>Você é um assessor?</p>
              <Link onClick={alterarLogin}>Clique aqui.</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
