import { useState, useEffect, useContext } from "react";
import styles from "./Calendario.module.css"
import { request } from '../../config/axios/axios';

import Navbar from "../../componentes/Navbar/Navbar";
import Baseboard from "../../componentes/LandingPage/BaseBoard/Baseboard";
import { ContinuousCalendar } from "../../componentes/ContinuousCalendar/ContinuousCalendar.jsx";
import Modal from "../../componentes/Modal/Modal";
import ModalHeader from "../../componentes/Modal/ModalHeader/ModalHeader";
import ModalBody from "../../componentes/Modal/ModalBody/ModalBody";
import ModalFooter from "../../componentes/Modal/ModalFooter/ModalFooter";
import ModalFooterButton from "../../componentes/Modal/ModalFooterButton/ModalFooterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faX } from "@fortawesome/free-solid-svg-icons";
import { AssessorContext } from "../../context/AssessorContext.jsx";

function Calendario() { 
    const [proposal, setProposal] = useState({});
    const [listAcceptedProposals, setListAcceptedProposals] = useState([]);
    const [listProposals, setListProposals] = useState([]);
    const [modalAcceptProposal, setModalAcceptProposal] = useState(false);
    const [modalViewProposal, setModalViewProposal] = useState(false);
    const [year, setYear] = useState();
    const {assessorId} = useContext(AssessorContext);

    useEffect(() => {loadProposals()}, [year]);

    const loadProposals = () => {
        request.getProposals(10)
        .then((data) => {
            setListProposals(data.data.content);
        });
    
        request.getAcceptedProposals(10, year)
        .then((data) => {
            setListAcceptedProposals(data.data);
        });
    }

    const openModalViewProposal = (proposal) => {
        request.getOrcamento(proposal.id)
        .then((data) => {
            let newProposal = proposal;
            newProposal.orcamento = Number.isInteger(data.data) ? `${data.data},00` : `${data.data}`;
            setProposal(newProposal);
        })
        setModalViewProposal(true);
    }

    const closeModalViewProposal = () => {
        setModalViewProposal(false);
    }

    const acceptProposalFunc = () => {
        request.acceptProposal(proposal.id, 10)
        .then(() => {
            console.log("aceitamos proposta")
            setModalViewProposal(false);
            setModalAcceptProposal(true);
            loadProposals();
        })
    }

    const denyProposalFunc = () => {
        request.denyProposal(proposal.id, 10)
        .then(() => {
            setModalViewProposal(false);
            loadProposals();
        })
    }

    const closeAcceptProposal = () => {
        setModalAcceptProposal(false);
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
    
    return (
        <div>
            <Navbar/>
            <div className={styles.body}>
                <div className={styles.container_body}>
                    <div className={styles.calendar_panel}>
                        <ContinuousCalendar acceptedProposals={listAcceptedProposals} year={year} setYear={setYear}/>
                    </div>
                    <div className={styles.proposal_panel}>
                        <div className={styles.title}>
                            {listProposals.length > 0 ? <img src={"/src/assets/proposal/notification.svg"} alt="" /> : ""}
                            <h1>Novas propostas</h1>
                        </div>
                        <div className={styles.proposals_container}>
                        {listProposals.length > 0 ? listProposals.map((proposal, index) => (
                            <div key={index} onClick={() => openModalViewProposal(proposal)} className={styles.proposal}>
                                <div></div>
                                    <span>Proposta de {proposal.nome}</span>
                            </div>
                        )) : <span>Hmm... por enquanto não há nada por aqui.</span>}
                        </div>
                    </div>
                </div>
            </div>
            <Baseboard/>
        
            {modalViewProposal && (
            <Modal>
                <ModalHeader onClose={() => closeModalViewProposal()}>
                    <span>Nova proposta</span>
                </ModalHeader>
                <ModalBody>
                    <div className={styles.containerModalViewModal}>            
                        <span>
                            <img src={"/src/assets/proposal/accept_proposal.svg"}/>
                        </span>
                        <h2>Você recebeu uma proposta do <br /> casamento de  <b>{proposal.nome}</b>!</h2>
                        <span>Revise os detalhes e confirme seu interesse em fazer parte da organização deste casamento.</span>
                        <div className={styles.proposal_info}>
                            <div >
                                <p>Nome do casal:</p>
                                <span>{proposal.nome}</span>
                            </div>
                            <div >
                                <p>Data: </p>
                                <span>{formatDate(proposal.dataFim)}</span>
                            </div>
                            <div >
                                <p>Já reservou um local?: </p>
                                <span>{proposal.local ? "Sim" : "Não"}</span>
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
                        onClick={() => denyProposalFunc()}
                    />
                    <ModalFooterButton
                        button="save_button" 
                        text="Aceitar proposta" 
                        onClick={acceptProposalFunc}
                    />
                </ModalFooter>
            </Modal>
            )}
            

            {modalAcceptProposal && (
                <Modal>
                    <ModalHeader onClose={() => closeAcceptProposal()}>
                        <span>Nova proposta</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className={styles.containerModalAccept}>
                            <div>
                                <img src={"/src/assets/proposal/confetti.svg"} />
                                <h2>Você foi adicionado ao casamento de <br /> <b>{proposal.nome}!</b></h2>
                                <span>A nova data já está adicionada ao seu calendário.</span>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <ModalFooterButton
                            button="cancel_button"
                            text="Concluir"
                            onClick={() => closeAcceptProposal()}
                        />
                    </ModalFooter>
                </Modal>
            )}
        </div>
    );
}

export default Calendario;