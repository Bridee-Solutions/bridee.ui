import { useState } from "react";
import styles from "./Calendario.module.css"

import Navbar from "../../componentes/Navbar/Navbar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import { ContinuousCalendar } from "../../componentes/ContinuousCalendar/ContinuousCalendar";
import Modal from "../../componentes/Modal/Modal";
import ModalHeader from "../../componentes/Modal/ModalHeader/ModalHeader";
import ModalBody from "../../componentes/Modal/ModalBody/ModalBody";
import ModalFooter from "../../componentes/Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../../componentes/Modal/ModalFooterButton/ModalFooterButton";

function Calendario() { 
    const [proposal, setProposal] = useState({});
    const [modalAcceptProposal, setModalAcceptProposal] = useState(false);
    const [modalViewProposal, setModalViewProposal] = useState(false);

    const onClick = () => {
        console.log("aAAAAAAAA");
    }

    const openModalViewProposal = (proposal) => {
        setModalViewProposal(true);
        setProposal(proposal);
    }

    const closeModalViewProposal = () => {
        setModalViewProposal(false)
    }

    const formatDate = (dateString) => {
        if (!dateString) return "Data inválida!";
    
        const [year, month, day] = String(dateString).split("-");
    
        if (!year || !month || !day) return "Data inválida!";
    
        const date = new Date(year, month, day);
    
        if (isNaN(date.getTime())) {
            return "Data inválida!";
        }
    
        return `${day}/${month}/${year}`
    };

    const proposals = [
        {
            id: 0,
            nome1: "Amanda",
            nome2: "Enzo",
            data: "2028-04-27",
            localReservado: true,
            orcamento: 90000.00,
            qtdConvidado: "101-150"
        },
        {
            id: 1,
            nome1: "PepoMaid",
            nome2: "Ez",
            data: "2028-04-27",
            localReservado: true,
            orcamento: 90000.00,
            qtdConvidado: "101-150"
        },
        {
            id: 2,
            nome1: "Ian",
            nome2: "SPTECH",
            data: "2028-04-27",
            localReservado: true,
            orcamento: 90000.00,
            qtdConvidado: "101-150"
        }
    ];

    
    return (
        <div>
            <Navbar/>
            <div className={styles.body}>
                <div className={styles.container_body}>
                    <div className={styles.calendar_panel}>
                        <ContinuousCalendar onClick={onClick}/>
                    </div>
                    <div className={styles.proposal_panel}>
                        <div className={styles.title}>
                            {proposals.length > 0 ? <img src={"/src/assets/proposal/notification.svg"} alt="" /> : ""}
                            <h1>Novas propostas</h1>
                        </div>
                        <div className={styles.proposals_container}>
                        {proposals.length > 0 ? proposals.map((proposal, index) => (
                            <div key={index} onClick={() => openModalViewProposal(proposal)} className={styles.proposal}>
                                <div></div>
                                <span>Proposta de {proposal.nome1} & {proposal.nome2}</span>
                            </div>
                        )) : <span>Hmm... por enquanto não há nada por aqui.</span>}
                        </div>
                    </div>
                </div>
            </div>
            <Baseboard/>
        
            {modalViewProposal && (
            <Modal>
                <ModalHeader onClose={closeModalViewProposal}>
                    <span>Nova proposta</span>
                </ModalHeader>
                <ModalBody>
                    <div className={styles.containerModalViewModal}>            
                        <span>
                            <img src={"/src/assets/proposal/accept_proposal.svg"}/>
                        </span>
                        <h2>Você recebeu uma proposta do <br /> casamento de  <b>{proposal.nome1} & {proposal.nome2}</b>!</h2>
                        <span>Revise os detalhes e confirme seu interesse em fazer parte da organização deste casamento.</span>
                        <div className={styles.proposal_info}>
                            <div >
                                <p>Nome do casal:</p>
                                <span>{proposal.nome1} & {proposal.nome2}</span>
                            </div>
                            <div >
                                <p>Data: </p>
                                <span>{formatDate(proposal.data)}</span>
                            </div>
                            <div >
                                <p>Já reservou um local?: </p>
                                <span>{proposal.localReservado ? "Sim" : "Não"}</span>
                            </div>
                            <div >
                                <p>Orçamento previsto: R$</p>
                                <span>{proposal.orcamento}</span>
                            </div>
                            <div >
                                <p>Quantos convidados terá?: </p>
                                <span>{proposal.qtdConvidado}</span>
                            </div>
                        </div>
                        
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ModalFooterButton
                        button="cancel_button"
                        text="Recusar"
                        onClick={closeModalViewProposal}
                    />
                    <ModalFooterButton
                        button="save_button" 
                        text="Aceitar proposta" 
                        onClick={closeModalViewProposal}
                    />
                </ModalFooter>
            </Modal>
            )}

            {modalAcceptProposal && (
            <Modal>
                <ModalHeader onClose={closeModalViewProposal}>
                    <span>Nova proposta</span>
                </ModalHeader>
                <ModalBody>
                    <div className={styles.containerModalViewModal}>
                        <div>
                            <img src={"/src/assets/proposal/accept_proposal.svg"}/>
                            <h2>Você recebeu uma proposta do casamento de {proposal.nome1} & {proposal.nome2}!</h2>
                            <span>Revise os detalhes e confirme seu interesse em fazer parte da organização deste casamento.</span>
                            <div>
                                <div>
                                    <p>Nome do casal:</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ModalFooterButton
                        button="cancel_button"
                        text="Recusar"
                        onClick={closeModalViewProposal}
                    />
                    <ModalFooterButton
                        button="save_button" 
                        text="Aceitar proposta" 
                        onClick={closeModalViewProposal}
                    />
                </ModalFooter>
            </Modal>
            )}
        </div>
    );
}

export default Calendario;