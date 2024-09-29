import { toast } from "react-toastify"
import { request } from "../../../config/axios/axios"
import styles from "./Fase7.module.css"
import { useNavigate } from "react-router-dom"
import { fases } from "../../../pages/Cadastro/Cadastro"
import { componenteFase } from "../../../pages/Cadastro/fases"


const Fase7 = (props) => {

    const navigate = useNavigate()

    const cadastrarUsuario = () => {
        // TODO: Realizar requisição apenas após o usuário aceitar a politica de privacidade e termos de uso.
        if(props.usuario.externo){
            request.saveCasalExterno(props.usuario).then(() => {
                toast.success("Conta criada com sucesso")
                fases.fase7 = false
                fases.fase1 = true
                navigate("/login")
            }).catch(() => {
                toast.error("Houve um erro ao cadastrar o usuário.")
            })
        }else{
            request.saveCasal(props.usuario).then(() => {
                toast.success("Conta criada com sucesso")
                fases.fase7 = false
                fases.fase1 = true
                navigate("/login")
            }).catch(() => {
                toast.error("Houve um erro ao cadastrar o usuário.")
            })
        }
        
    }

    return(
        <div className={styles.fase7}>
            <div>
                <h2>Nossa poítica de privacidade</h2>
            </div>
            <button className={styles.fase7_button} onClick={cadastrarUsuario}>Cadastrar</button>
        </div>
    )

}


export default Fase7;