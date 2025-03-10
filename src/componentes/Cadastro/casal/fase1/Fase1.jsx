import fase1Style from "./Fase1.module.css";
import { Link, useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { GoogleLogin } from "@react-oauth/google";
import {
  componenteFase,
  definirProximaFase,
  definirUsuarioEFases,
} from "../../../../pages/Cadastro/fases";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { request } from "../../../../config/axios/axios";

const Fase1 = (props) => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const googleSuccessLogin = (response) => {
    const tokenDetails = jwtDecode(response.credential);
    const userEmail = tokenDetails.email;
    request
      .verifyUserEmail(userEmail)
      .then((res) => {
        localStorage.setItem("access_token", response.credential);
        navigate(`/dashboard`);
      })
      .catch((erro) => {
        if (props.usuario.tipo == "assessor") {
          window.location.href = `${window.location.href}?email=${userEmail}&tipo=assessor`;
        } else {
          window.location.href = `${window.location.href}?email=${userEmail}`;
        }
        definirUsuarioEFases(window, props.usuario, props.fases, props.setFase);
      });
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const proximaFase = async () => {
    if (!isEmailValido() || !isSenhaValida()) {
      toast.error("Preencha os campos corretamente!");
      return;
    }
    const resposta = await request
      .verifyUserEmail(email.current.value)
      .then((response) => {
        if (response.status == 200) {
          toast.error("Email já cadastrado");
          email.current.style.borderColor = `red`;
          return;
        }
      })
      .catch((error) => {
        if (error.status == 404) {
          props.usuario.email = email.current.value;
          props.usuario.senha = password.current.value;
          props.usuario.confirmarSenha = confirmPassword.current.value;
          const proximaFase = definirProximaFase(props.fases);
          const componenteProximaFase = componenteFase(
            proximaFase,
            props.setFase,
            props.usuario
          );
          props.setFase(componenteProximaFase);
        }
      });
  };

  const isEmailValido = () => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(email.current.value) ||
      email.current.value.trim() == ""
    ) {
      email.current.style.borderColor = `red`;
      return false;
    }
    email.current.style.borderColor = `black`;
    return true;
  };

  const isSenhaValida = () => {
    const senhaRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    console.log(!senhaRegex.test(password.current.value));

    if (
      !(password.current.value == confirmPassword.current.value) ||
      !senhaRegex.test(password.current.value) ||
      !senhaRegex.test(confirmPassword.current.value)
    ) {
      if (!senhaRegex.test(password.current.value)) {
        password.current.style.borderColor = `red`;
      } else {
        password.current.style.borderColor = `black`;
      }

      if (
        !(password.current.value == confirmPassword.current.value) ||
        !senhaRegex.test(confirmPassword.current.value)
      ) {
        confirmPassword.current.style.borderColor = `red`;
      } else {
        confirmPassword.current.style.borderColor = `black`;
      }

      return false;
    }
    confirmPassword.current.style.borderColor = `black`;
    return true;
  };

  const cadastrarAssessor = () => {
    window.location.href = `${window.location.href}?tipo=assessor`;
  };

  return (
    <div className={fase1Style.fase1_content}>
      <div className={fase1Style.login_content_header}>
        <div className={fase1Style.titulo}>
          <span>
            bridee<b>.</b>
          </span>
        </div>
        <div className={fase1Style.subtitulo}>
          <div className={fase1Style.contSub}>
            {props.usuario.tipo == "casal" ? (
              <p>O match perfeito para o dia dos seus sonhos.</p>
            ) : (
              <p>Conecte-se com casais e construa celebrações memoráveis.</p>
            )}
          </div>
        </div>
      </div>

      <div className={fase1Style.fase1_content_body}>
        {props.usuario.tipo == "casal" ? (
          <div className={fase1Style.containerBemvind}>
            <span>Crie uma conta e comece a planejar seu casamento!</span>
          </div>
        ) : (
          <div className={fase1Style.containerBemvindAssessor}>
            <span>
            Crie uma conta gratuita para planejar seus eventos de forma personalizada.

            </span>
          </div>
        )}
        <div className={fase1Style.login_inputs}>
          <div style={{ position: "relative" }}>
            <CiMail className={fase1Style.login_inputs_icon} />
            <input
              type="text"
              ref={email}
              placeholder="Digite o e-mail"
              defaultValue={props.usuario.email}
              onInput={isEmailValido}
            />
          </div>
          <div style={{ position: "relative" }}>
            <CiLock className={fase1Style.login_inputs_icon} />
            <input
              type="password"
              ref={password}
              placeholder="Digite a senha"
              defaultValue={props.usuario.senha}
              onInput={isSenhaValida}
            />
          </div>
          <div style={{ position: "relative" }}>
            <CiLock className={fase1Style.login_inputs_icon} />
            <input
              type="password"
              ref={confirmPassword}
              placeholder="Confirme a senha"
              defaultValue={props.usuario.confirmarSenha}
              onInput={isSenhaValida}
            />
          </div>
        </div>
        <div className={fase1Style.fase1_button}>
          <div className={fase1Style.containerBotao}>
            <div className={fase1Style.conteBt}>
              <button onClick={proximaFase}>Criar conta</button>
            </div>
          </div>
          <div className={fase1Style.ou}>
            <span>ou</span>
          </div>
          <div className={fase1Style.google_button}>
            <GoogleLogin
              onSuccess={googleSuccessLogin}
              onError={errorMessage}
            />
          </div>
        </div>

        <div className={fase1Style.containerRodape}>
          {props.usuario.tipo == "casal" && (
            <div className={fase1Style.login_content_footer}>
              <div>
                <span>Você é um assessor?</span>
                <Link onClick={cadastrarAssessor}>Clique aqui.</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fase1;
