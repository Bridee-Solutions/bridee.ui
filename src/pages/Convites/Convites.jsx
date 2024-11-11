import ConviteBody from "../../componentes/Convites/Body/ConviteBody";
import ConviteHeader from "../../componentes/Convites/Header/ConviteHeader";
import NavComp from "../../componentes/Navbar/Navbar";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import styles from "./Convites.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rightArrow from "../../assets/right-arrow.svg"
import { toast } from "react-toastify";
import { useState } from "react";
import RelatorioModal from "../../componentes/Convites/Modal/Relatorio/RelatorioModal";
import GerenciarInformacoesModal from "../../componentes/Convites/Modal/GerenciarInformacoes/GerenciarInformacoesModal";
import ConviteModal from "../../componentes/Convites/Modal/Convite/ConviteModal";
import AdicionarConvidadoModal from "../../componentes/Convites/Modal/AdicionarConvidado/AdicionarConvidadoModal";
import EditarConviteModal from "../../componentes/Convites/Modal/EditarConvite/EditarConviteModal";
import AdicionarConviteModal from "../../componentes/Convites/Modal/AdicionarConvite/AdicionarConviteModal";
import DeletarModal from "../../componentes/Convites/Modal/Deletar/DeletarModal";


const Convites = () => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState();

    const copyTextToClipBoard = () => {
        window.navigator.clipboard.writeText(window.location.href);
        toast.success("Link copiado com sucesso!")
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const setActualModal = (modal) => {
        setModal(defineActualModel(modal))
        openModal();
    }

    const defineActualModel = (modal) => {
        if(modal == "Relatorio"){
            return <RelatorioModal total={250} confirmado={55} recusado={25} semResposta={160} closeModal={closeModal}/>
        }else if(modal == "Gerenciar Informacoes"){
            return <GerenciarInformacoesModal closeModal={closeModal} setActualModal={setActualModal}/>
        }else if(modal == "Começar do zero"){
            return <DeletarModal closeModal={closeModal} title={`Começar do zero`} 
            subtitle={`Gostaria de reiniciar sua lista de convidados?`} 
            description={`Tenha em mente que todas as informações dos 10 convites atuais serão removidas permanentemente.`}/>
        }else if(modal == "Remover Convidado"){
            return <DeletarModal closeModal={closeModal} title={`Remover Convidado`}
            subtitle={`Deseja remover “nome do usuário’’?`}
            description={`Todas as informações deste convidado serão excluídas permanentemente`}/>
        }else if(modal == "Convite"){
            return <ConviteModal closeModal={closeModal} setActualModal={setActualModal}/>
        }else if(modal == "Adicionar Convidado"){
            return <AdicionarConvidadoModal closeModal={closeModal}/>
        }else if(modal == "Editar Convidado"){
            return <AdicionarConvidadoModal closeModal={closeModal} idConvidado={1}/>
        }else if(modal == "Editar Convite"){
            return <EditarConviteModal closeModal={closeModal}/>
        }else if(modal == "Adicionar Convite"){
            return <AdicionarConviteModal closeModal={closeModal} setActualModal={setActualModal}/>
        }
    }

    return(
        <div className={styles.convites_page}>
            <NavComp/>
            <div className={styles.convites_content}>
                <div className={styles.convites_container}>
                    <div className={styles.convites_container_left}>
                        <div className={styles.convites_container_left_header} onClick={() => setActualModal("Relatorio")}>
                            <div className={styles.relatorio_circle_div}>
                                <div className={styles.relatorio_circle_div_content}>
                                    <h3>Relatório de convidados</h3>
                                    <div className={styles.green_circle}></div>
                                    <div className={styles.yellow_circle}></div>
                                    <div className={styles.red_circle}></div>
                                </div>
                                <span>5 convidados irão comparecer</span>
                            </div>
                            <img src={rightArrow}/>
                        </div>
                        <div className={styles.convites_container_left_body}>
                            <div className={styles.convites_container_left_body_item}>
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                <p>Divulgar por whatsapp</p>
                            </div>
                            <div className={styles.convites_container_left_body_item} onClick={() => setActualModal("Gerenciar Informacoes")}>
                                <FontAwesomeIcon icon={faGear}/>
                                <p>Gerenciar confirmações</p>
                            </div>
                            <div className={styles.convites_container_left_body_item}>
                                <FontAwesomeIcon icon={faChair}/>
                                <p>Planejador de assentos</p>
                            </div>
                        </div>
                        <div className={styles.convites_container_left_footer}>
                            <div>{window.location.href}</div>
                            <FontAwesomeIcon onClick={copyTextToClipBoard} icon={faCopy} className={styles.convites_container_left_footer_icon}/>
                        </div>
                    </div>
                    <div className={styles.convites_container_right}>
                        <ConviteHeader/>
                        <ConviteBody setActualModal={setActualModal}/>
                    </div>
                </div>
            </div>
            {isModalOpen && modal}
        </div>
    );

}


export default Convites;