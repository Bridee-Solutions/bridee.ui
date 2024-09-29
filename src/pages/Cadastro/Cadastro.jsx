import LateralImage from "../../component/LoginLateralImage";
import loginStyles from "../Login/Login.module.css"
import CadastroHeader from "../../component/Cadastro/header/Header";
import { componenteFase, definirFluxoCadastro, definirProximaFase} from "./fases";
import { useEffect, useState, useRef } from "react";

export const fases = {
    fase1: true,
    fase2: false,
    fase3: false,
    fase4: false,
    fase5: false,
    fase6: false,
    fase7: false
}

const Cadastro = () => {

    const[fase, setFase] = useState();
    const[progressBarValue, setProgressBarValue] = useState();

    const usuario = useRef({
        email: "",
        senha: "",
        confirmarSenha: "",
        nome: "",
        nomeParceiro: "",
        isLocalReservado: false,
        local: "",
        dataCasamento: "",
        quantidadeConvidados: 0,
        externo: false
    }   )

    useEffect(() => {
        definirFluxoCadastro(window, usuario.current, setFase)
        setFase(componenteFase(fases, setFase, usuario.current))
    }, [])

    useEffect(() => {
        setProgressBarValue(calcularProgressBar)
    }, [fase])

    const calcularProgressBar = () => {
        const vetorFases = Object.values(fases)
        
        const faseAtiva = vetorFases.filter(fase => fase == true)[0]
        const indice = vetorFases.indexOf(faseAtiva);
        
        return (indice + 1)/vetorFases.length * 100 
    }

    return(
        <div className={loginStyles.login_body}>
            <LateralImage/>
            <div className={loginStyles.login_container}>
                <CadastroHeader isNotFirst={!fases.fase1} setFase={setFase} usuario={usuario.current} progressBarValue={progressBarValue}/>
                <div className={loginStyles.login_content}>
                    {fase}
                </div>
            </div>
        </div>
    );

}

export default Cadastro;