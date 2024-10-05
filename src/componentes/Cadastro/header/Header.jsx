import loginStyles from "../../../pages/Login/Login.module.css"
import progressBarStyle from "./ProgressBar.module.css"
import headerStyles from "./Header.module.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { componenteFase, definirFaseAnterior } from "../../../pages/Cadastro/fases";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";


const CadastroHeader = (props) => {

    const navigate = useNavigate();
    const progressBar = useRef();

    const faseAnterior = () => {
        if(props.fases.fase1 || props.fases.fase8){
            navigate("/login")
            return
        }
        if(props.fases.fase2 && props.usuario.externo){
            definirFaseAnterior();
            navigate("/login")
            return
        }
        
        const novasFases = definirFaseAnterior(props.fases)
        const componenteFaseAnterior = componenteFase(novasFases, props.setFase, props.usuario);
        props.setFase(componenteFaseAnterior)
    }

    useEffect(() => {
        if(progressBar.current != undefined){   
            progressBar.current.style.width = `${props.progressBarValue}%`
        }
    }, [props.progressBarValue])

    return(
        <div>

            {props.isNotFirst ? 
                <div className={headerStyles.header}>
                    <div className={loginStyles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={faseAnterior}/>
                    </div>
                    {/* <span>Voltar</span> */}
                    <div className={loginStyles.login_header_text} style={{flexDirection: "column", height: "14vh"}}>
                        <h1>bridee</h1>
                        <p style={{margin: "1% 0"}}>O match perfeito para o dia dos seus sonhos.</p>
                        <div className={progressBarStyle.progress_bar_border}>
                            <div ref={progressBar} className={progressBarStyle.progress_bar}></div>
                        </div>
                    </div>
                </div>:
                <div className={headerStyles.header}>
                    <div className={loginStyles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={faseAnterior}/>
                    </div>
                    <div className={loginStyles.login_header_text}>
                        <p>Já tem uma conta?</p> <Link to={`/login`}>Faça Login</Link>
                    </div>
                </div>
            }
        </div>
    );

}

export default CadastroHeader;