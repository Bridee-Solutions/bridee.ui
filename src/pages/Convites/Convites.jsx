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
// import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import RelatorioModal from "../../componentes/Convites/Modal/Relatorio/RelatorioModal";
import GerenciarInformacoesModal from "../../componentes/Convites/Modal/GerenciarInformacoes/GerenciarInformacoesModal";
import ConviteModal from "../../componentes/Convites/Modal/Convite/ConviteModal";
import AdicionarConvidadoModal from "../../componentes/Convites/Modal/AdicionarConvidado/AdicionarConvidadoModal";
import EditarConviteModal from "../../componentes/Convites/Modal/EditarConvite/EditarConviteModal";
import AdicionarConviteModal from "../../componentes/Convites/Modal/AdicionarConvite/AdicionarConviteModal";
import DeletarModal from "../../componentes/Convites/Modal/Deletar/DeletarModal";
import WhatsappMensagemModal from "../../componentes/Convites/Modal/WhatsappMensagem/WhatsappMensagemModal";
import { request } from "../../config/axios/axios";
import { gerenciarInformacoesModal, relatorioModal, whatsappMessageModal } from "./ConvitesService.jsx";


const Convites = () => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState();
    const [convites, setConvites] = useState();

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
        setModal(modal)
        openModal();
    }

    useEffect(() => {
        request.getConvitesFromCasamento(2).then((response) => {
            setConvites(response.data.content)
        })
    }, [])


    return(
        <div className={styles.convites_page}>
            <NavComp/>
            <div className={styles.convites_content}>
                <div className={styles.convites_container}>
                    <div className={styles.convites_container_left}>
                        <div className={styles.convites_container_left_header} onClick={() => relatorioModal(undefined, closeModal, setActualModal)}>
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
                            <div className={styles.convites_container_left_body_item} onClick={() => whatsappMessageModal(closeModal, setActualModal)}>
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                <p>Divulgar por whatsapp</p>
                            </div>
                            <div className={styles.convites_container_left_body_item} onClick={() => gerenciarInformacoesModal(closeModal, setActualModal)}>
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
                        <ConviteBody setActualModal={setActualModal} convites={convites} closeModal={closeModal} setConvites={setConvites}/>
                    </div>
                </div>
            </div>
            {isModalOpen && modal}
        </div>
    );

}


export default Convites;