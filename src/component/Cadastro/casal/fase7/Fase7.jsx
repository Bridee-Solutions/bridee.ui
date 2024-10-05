import { toast } from "react-toastify"
import { request } from "../../../../config/axios/axios"
import styles from "./Fase7.module.css"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { componenteFase, definirProximaFase } from "../../../../pages/Cadastro/fases"

const Fase7 = (props) => {

    const checkbox = useRef();
    const navigate = useNavigate()

    const cadastrarUsuario = () => {

        if(!checkbox.current.checked){
            toast.error("Aceite os termos de uso e a política de privacidade antes de continuar.")
            return;
        }

        if(props.usuario.externo){
            request.saveCasalExterno(props.usuario).then((response) => {
                toast.success("Conta criada com sucesso")
                navigate("/login")
            }).catch(() => {
                toast.error("Houve um erro ao cadastrar o usuário.")
            })
        }else{
            request.saveCasal(props.usuario).then(() => {
                toast.success("Conta criada com sucesso")
                const proximaFase = definirProximaFase(props.fases)
                const componenteProximaFase = componenteFase(proximaFase, props.setFase, props.usuario)
                props.setFase(componenteProximaFase);
            }).catch(() => {
                toast.error("Houve um erro ao cadastrar o usuário.")
            })
        }
        
    }

    return(
        <div className={styles.fase7}>
            <div className={styles.fase7_title}>
                <h2>Termo de uso e política de privacidade</h2>
            </div>
            <div className={styles.fase7_body}>
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços. Ao utilizar nosso site/aplicativo, você concorda com as práticas descritas nesta política.

            1. Informações Coletadas

            Coletamos diferentes tipos de informações para oferecer e melhorar nossos serviços:

            Informações Pessoais: Nome, e-mail, número de telefone, endereço, e quaisquer outras informações que você fornecer voluntariamente ao se cadastrar ou entrar em contato conosco.
            </div>
            <div className={styles.fase7_footer}>
                <div className={styles.fase7_checkbox}>
                    <input type="checkbox" ref={checkbox}/> 
                    <span>Li e concordo com os termos de uso e a política de privacidade</span>
                </div>
                <button className={styles.fase7_button} onClick={cadastrarUsuario}>Cadastrar</button>
            </div>
        </div>
    )

}


export default Fase7;