import LateralImage from "../../component/LoginLateralImage";
import loginStyles from "../Login/Login.module.css"
import CadastroHeader from "../../component/Cadastro/header/Header";
import { componenteFase, definirFluxoCadastro, definirProximaFase} from "./fases";
import { useEffect, useState, useRef } from "react";

const Cadastro = () => {

    const[fase, setFase] = useState();
    const[progressBarValue, setProgressBarValue] = useState();

    const fases = useRef({
        fase1: true,
        fase2: false,
        fase3: false,
        fase4: false,
        fase5: false,
        fase6: false,
        fase7: false,
        fase8: false
    })

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
        definirFluxoCadastro(window, usuario.current, setFase, fases.current)
        const componenteProximaFase = componenteFase(fases.current, setFase, usuario.current) 
        setFase(componenteProximaFase)
    }, [])

    useEffect(() => {
        setProgressBarValue(calcularProgressBar(fases.current))
    }, [fase])

    const calcularProgressBar = (fases) => {
        const vetorFases = Object.values(fases)
        
        const faseAtiva = vetorFases.filter(fase => fase == true)[0]
        const indice = vetorFases.indexOf(faseAtiva);
        
        return (indice + 1)/vetorFases.length * 100 
    }

    return(
        <div className={loginStyles.login_body}>
            <LateralImage/>
            <div className={loginStyles.login_container}>
                <CadastroHeader isNotFirst={!fases.current.fase1} setFase={setFase} usuario={usuario.current} progressBarValue={progressBarValue} fases={fases.current}/>
                <div className={loginStyles.login_content}>
                    {fase}
                </div>
            </div>
        </div>
    );

}

export default Cadastro;