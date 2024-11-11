import { faUser, faEnvelope, faPhone, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./OrcamentoCard.module.css";
import InputIcon from "../../componentes/InputIcon/InputIcon";
import LinkButton from "../../componentes/LinkButton/LinkButton";

const OrcamentoCard = () => {
    return (
      <div className={styles.cardOrcamento}>
        <div className={styles.tituloOrcamento}>
          <span>Pedir orçamento</span>
        </div>
  
        <div className={styles.containerFundo}>
          <div className={styles.fundo}>
            <div className={styles.detalhes}>
              <span>Seus detalhes</span>
            </div>
            <div className={styles.containerInputs}>
              <div className={styles.conteudoInputs}>
                <div className={styles.containerIn}>
                  <InputIcon type="text" icon={faUser} placeholder="Nome" />
                </div>
                <div>
                  <InputIcon type="text" icon={faEnvelope} placeholder="Email" />
                </div>
                <div className={styles.duasinputs}>
                  <InputIcon type="text" icon={faPhone} placeholder="Telefone" />
                  <InputIcon type="date" icon={faCalendar} placeholder="Data" />
                </div>
                <InputIcon type="number" icon={faUsers} placeholder="Convidados" />
              </div>
            </div>
          </div>
        </div>
  
        <div className={styles.containerinputgrandona}>
          <textarea
            className={styles.inputgrandona}
            placeholder="Olá! Encontramos seu anúncio no bridee e gostaríamos de ter mais informação sobre seus serviços!"
          />
        </div>
  
        <div className={styles.containerBotao}>
          <LinkButton to="/lista-tarefas" label="Enviar consulta" />
        </div>
      </div>
    );
  }
  
  export default OrcamentoCard;