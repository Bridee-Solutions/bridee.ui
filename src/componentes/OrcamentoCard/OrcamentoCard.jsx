import { faUser, faEnvelope, faPhone, faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import styles from "./OrcamentoCard.module.css";
import InputIcon from "../../componentes/InputIcon/InputIcon";
import LinkButton from "../../componentes/LinkButton/LinkButton";
import { request } from "../../config/axios/axios";

const OrcamentoCard = ({assessorId}) => {
  
  const nome = useRef();
  const emailCasal = useRef();
  const telefone = useRef();
  const data = useRef();
  const qtdConvidados = useRef();
  const messageCasal = useRef();

  const defineNomeValue = (value) => {
    nome.current = value
  }

  const defineEmailCasal = (value) => {
    emailCasal.current = value
  }

  const defineTelefone = (value) => {
    telefone.current = value
  }

  const defineData = (value) => {
    data.current = value
  }

  const defineQtdConvidados = (value) => {
    qtdConvidados.current = value
  }

  const solicitarOrcamento = () => {
    telefone.current = removeMask(telefone.current)    
    
    let casalTelefone = telefone.current.replaceAll(" ", "")
    casalTelefone = casalTelefone.replaceAll("-", "")
    casalTelefone = casalTelefone.replaceAll("(", "")
    casalTelefone = casalTelefone.replaceAll(")", "")
    const solicitarOrcamentoRequest = {
      nome: nome.current,
      emailCasal: emailCasal.current,
      telefone: casalTelefone,
      data: data.current,
      qtdConvidados: qtdConvidados.current,
      messageCasal: messageCasal.current.value
    }    
    console.log(solicitarOrcamentoRequest);
    
    request.sendOrcamentoEmail(assessorId, solicitarOrcamentoRequest)
  }

  const removeMask = (value) => {
    value = telefone.current.replaceAll("(", "")
    value = telefone.current.replaceAll(")", "")
    value = telefone.current.replaceAll("-", "")
    value = telefone.current.replaceAll(" ", "")
    value = telefone.current.replaceAll("+", "")
    return value
  }

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
                <InputIcon type="text" icon={faUser} placeholder="Nome" defineInputValue={defineNomeValue}/>
              </div>
              <div>
                <InputIcon type="text" icon={faEnvelope} placeholder="Email" defineInputValue={defineEmailCasal}/>
              </div>
              <div className={styles.duasinputs}>
                <InputIcon type="text" icon={faPhone} placeholder="Telefone" defineInputValue={defineTelefone}/>
                <InputIcon type="date" icon={faCalendar} placeholder="Data" defineInputValue={defineData}/>
              </div>
              <InputIcon type="number" icon={faUsers} placeholder="Convidados" defineInputValue={defineQtdConvidados}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerinputgrandona}>
        <textarea
          ref={messageCasal}
          className={styles.inputgrandona}
          placeholder="Olá! Encontramos seu anúncio no bridee e gostaríamos de ter mais informação sobre seus serviços!"
        />
      </div>

      <div className={styles.containerBotao}>

        <LinkButton label="Enviar consulta" onClick={() => solicitarOrcamento(assessorId)}/>
      </div>
    </div>
  );
}

export default OrcamentoCard;