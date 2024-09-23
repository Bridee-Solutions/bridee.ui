import loginStyles from "../../../pages/Login/Login.module.css"
import progressBarStyle from "./ProgressBar.module.css"
import headerStyles from "./Header.module.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { componenteFase, definirFaseAnterior, fases } from "../../../pages/Cadastro/fases";
import { Link, useNavigate } from "react-router-dom";


const CadastroHeader = (props) => {

    const navigate = useNavigate();

    const faseAnterior = () => {
        if(fases.fase1){
            navigate("/login")
            return
        }
        props.setFase(componenteFase(definirFaseAnterior(), props.setFase)) 
    }

    return(
        <div>

            {props.isNotFirst ? 
                <div className={headerStyles.header}>
                    <div className={loginStyles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={faseAnterior}/>
                    </div>
                    <div className={loginStyles.login_header_text} style={{flexDirection: "column", height: "14vh"}}>
                        <h1>Bridee</h1>
                        <p style={{margin: "1% 0"}}>O match perfeito para o dia dos seus sonhos.</p>
                        <div className={progressBarStyle.progress_bar_border}>
                            <div className={progressBarStyle.progress_bar}></div>
                        </div>
                    </div>
                </div>:
                <div className={headerStyles.header}>
                    <div className={loginStyles.login_header_icon}>
                        <FaLongArrowAltLeft onClick={faseAnterior}/>
                    </div>
                    <div className={loginStyles.login_header_text}>
                        <p>Não tem uma conta?</p> <Link to={`/cadastrar`}>Cadastre-se</Link>
                    </div>
                </div>
            }
        </div>
    );

}

export default CadastroHeader;