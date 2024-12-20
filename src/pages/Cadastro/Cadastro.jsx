import LateralImage from "../../componentes/LoginLateralImage";
import loginStyles from "../Login/Login.module.css";
import CadastroHeader from "../../componentes/Cadastro/header/Header";
import { componenteFase, definirUsuarioEFases } from "./fases";
import { useEffect, useState, useRef } from "react";

const Cadastro = () => {
  const [fase, setFase] = useState();
  const [progressBarValue, setProgressBarValue] = useState();

  const fases = useRef({
    fase1: true,
  });

  const usuario = useRef();

  useEffect(() => {
    if (usuario.current == undefined || fases.current == undefined) {
      definirUsuarioEFases(window, usuario, fases, setFase);
    }
    const componenteProximaFase = componenteFase(
      fases.current,
      setFase,
      usuario.current
    );
    setFase(componenteProximaFase);
  }, []);

  useEffect(() => {
    setProgressBarValue(calcularProgressBar(fases.current));
  }, [fase]);

  const calcularProgressBar = (fases) => {
    const vetorFases = Object.values(fases);

    const faseAtiva = vetorFases.filter((fase) => fase == true)[0];
    const indice = vetorFases.indexOf(faseAtiva);

    return ((indice + 1) / vetorFases.length) * 100;
  };

  return (
    <div className={loginStyles.login_body}>
      <LateralImage tipo={usuario.current?.tipo} />{" "}
      <div className={loginStyles.login_container}>
        <CadastroHeader
          isNotFirst={!fases.current.fase1}
          setFase={setFase}
          usuario={usuario.current}
          progressBarValue={progressBarValue}
          fases={fases.current}
        />
        <div className={loginStyles.login_content}>{fase}</div>
        
      </div>
    </div>
  );
};

export default Cadastro;
