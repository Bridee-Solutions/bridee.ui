import LateralImage from "../../component/LoginLateralImage";
import loginStyles from "../Login/Login.module.css"
import CadastroHeader from "../../component/Cadastro/header/Header";
import Fase1 from "../../component/Cadastro/fase2/Fase2";
import { componenteFase, fases } from "./fases";
import { useEffect, useState } from "react";

const Cadastro = () => {

    const[fase, setFase] = useState();

    useEffect(() => {
        setFase(componenteFase(fases, setFase))
    }, [])

    return(
        <div className={loginStyles.login_body}>
            <LateralImage/>
            <div className={loginStyles.login_container}>
                <CadastroHeader isNotFirst={!fases.fase1} setFase={setFase}/>
                <div className={loginStyles.login_content}>
                    {fase}
                </div>
            </div>
        </div>

    );

}

export default Cadastro;