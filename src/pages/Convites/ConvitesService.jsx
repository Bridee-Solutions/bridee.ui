import AdicionarConvidadoModal from "../../componentes/Convites/Modal/AdicionarConvidado/AdicionarConvidadoModal"
import AdicionarConviteModal from "../../componentes/Convites/Modal/AdicionarConvite/AdicionarConviteModal"
import ConviteModal from "../../componentes/Convites/Modal/Convite/ConviteModal"
import DeletarModal from "../../componentes/Convites/Modal/Deletar/DeletarModal"
import EditarConviteModal from "../../componentes/Convites/Modal/EditarConvite/EditarConviteModal"
import GerenciarInformacoesModal from "../../componentes/Convites/Modal/GerenciarInformacoes/GerenciarInformacoesModal"
import RelatorioModal from "../../componentes/Convites/Modal/Relatorio/RelatorioModal"
import WhatsappMensagemModal from "../../componentes/Convites/Modal/WhatsappMensagem/WhatsappMensagemModal"

export const defineConvidadoStatusColor = (status, styles) => {
    if(status == "CONFIRMADO"){
        return styles.green_circle
    }else if(status == "RECUSADO"){
        return styles.red_circle
    }
    return styles.yellow_circle
}

export const defineConvidadoStatus = (status) => {
    if(status == "CONFIRMADO"){
        return "Confirmado"
    }else if(status == "RECUSADO"){
        return "Recusado"
    }
    return "Sem Resposta"
}

export const relatorioModal = (relatorio, closeModal, setActualModal) => {
    const relatorioModal = <RelatorioModal total={250} confirmado={55} recusado={25} semResposta={160} closeModal={closeModal}/>
    setActualModal(relatorioModal);
}

export const gerenciarInformacoesModal = (closeModal, setActualModal) => {
    const gerenciarModal = <GerenciarInformacoesModal closeModal={closeModal} setActualModal={setActualModal}/>
    setActualModal(gerenciarModal)
}

export const comecarDoZeroModal = (closeModal, setActualModal) => {
    const comecarDoZeroModal = <DeletarModal closeModal={closeModal} title={`Começar do zero`} 
        subtitle={`Gostaria de reiniciar sua lista de convidados?`} 
        description={`Tenha em mente que todas as informações dos 10 convites atuais serão removidas permanentemente.`}/>
    setActualModal(comecarDoZeroModal)
}

export const removerConvidadosModal = (closeModal, setActualModal) => {
    const removerConvidadosModal = <DeletarModal closeModal={closeModal} title={`Remover Convidado`}
        subtitle={`Deseja remover “nome do usuário"?`}
        description={`Todas as informações deste convidado serão excluídas permanentemente`}/>
    setActualModal(removerConvidadosModal)
}

export const conviteModal = (convite, closeModal, setActualModal, convites, setConvites) => {
    const conviteModal = <ConviteModal closeModal={closeModal} convite={convite} convites={convites} setActualModal={setActualModal} setConvites={setConvites}/>
    setActualModal(conviteModal)
}

export const adicionarConvidadoModal = (closeModal, setActualModal) => {
    const adicionarConvidado = <AdicionarConvidadoModal closeModal={closeModal}/>
    setActualModal(adicionarConvidado)
}

export const editarConvidadoModal = (closeModal, idConvidado, setActualModal) => {
    const editarConvidado = <AdicionarConvidadoModal closeModal={closeModal} idConvidado={1}/>
    setActualModal(editarConvidado)
}

export const editarConviteModal = (convite, closeModal, setActualModal, convites, setConvites) => {
    const editarConvite = <EditarConviteModal closeModal={closeModal} convite={convite} setConvites={setConvites} convites={convites} />
    setActualModal(editarConvite)
}

export const adicionarConviteModal = (closeModal, setActualModal) => {
    const adicionarConvite = <AdicionarConviteModal closeModal={closeModal} setActualModal={setActualModal}/>
    setActualModal(adicionarConvite)
}

export const whatsappMessageModal = (closeModal, setActualModal) => {
    const whatsappModal = <WhatsappMensagemModal closeModal={closeModal}/>
    setActualModal(whatsappModal);
}

export const findTitular = (convidados) => {
    const titular = convidados?.filter((convidado) => convidado?.tipo == "TITULAR")[0]
    return titular;
}