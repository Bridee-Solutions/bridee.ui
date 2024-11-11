import Modal from "../../../Modal/Modal"
import ModalBody from "../../../Modal/ModalBody/ModalBody"
import ModalHeader from "../../../Modal/ModalHeader/ModalHeader"
import Relatorio from "../../Relatorio/Relatorio"
import styles from "./RelatorioModal.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

const RelatorioModal = (props) => {

    return(
        <Modal>
            <ModalHeader>
                <div className={styles.relatorio_modal_header}>
                    <div className={styles.relatorio_modal_header_title}>
                        <h2>Relatório de convidados</h2>
                    </div>
                    <div className={styles.relatorio_modal_header_close}>
                        <FontAwesomeIcon icon={faX} onClick={() => props.closeModal()} style={{cursor: "pointer"}}/>
                    </div>
                </div>
            </ModalHeader>
            <ModalBody>
                <div className={styles.relatorio_modal_body}>
                    <Relatorio tipo="Convidados cadastrados" quantidade={props.total} total={props.total} 
                            semResposta={props.semResposta} confirmado={props.confirmado} recusado={props.recusado}/>
                    <Relatorio tipo="Sem Resposta" quantidade={props.semResposta} total={props.total}/>
                    <Relatorio tipo="Confirmado" quantidade={props.confirmado} total={props.total}/>
                    <Relatorio tipo="Recusado" quantidade={props.recusado} total={props.total}/>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default RelatorioModal