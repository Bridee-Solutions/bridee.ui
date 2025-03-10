import Modal from "../../../Modal/Modal"
import ModalBody from "../../../Modal/ModalBody/ModalBody"
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader"
import Relatorio from "../../Relatorio/Relatorio"
import styles from "./RelatorioModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import { request } from "../../../../config/axios/axios"
import { CasalContext } from "../../../../context/CasalContext"

const RelatorioModal = (props) => {

    const [relatorio, setRelatorio] = useState();
    const {casamentoId} = useContext(CasalContext)

    useEffect(() => {
        request.getRelatorio(casamentoId).then(response => {
            setRelatorio(response.data)
        })
    }, [])

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.relatorio_modal_header}>
                    <div className={styles.relatorio_modal_header_title}>
                        <span>Relatório de convidados</span>
                    </div>
                    <div className={styles.relatorio_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.relatorio_modal_body}>
                    <Relatorio tipo="Convidados cadastrados" quantidade={relatorio?.convidadosCadastrados} total={relatorio?.convidadosCadastrados} 
                            semResposta={relatorio?.semResposta} confirmado={relatorio?.confirmado} recusado={relatorio?.recusado}/>
                    <Relatorio tipo="Sem Resposta" quantidade={relatorio?.semResposta} total={relatorio?.convidadosCadastrados}/>
                    <Relatorio tipo="Confirmado" quantidade={relatorio?.confirmado} total={relatorio?.convidadosCadastrados}/>
                    <Relatorio tipo="Recusado" quantidade={relatorio?.recusado} total={relatorio?.convidadosCadastrados}/>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default RelatorioModal