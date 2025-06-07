import axios from 'axios';
import { interceptorsConfiguration } from './interceptor';

// const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const Api = axios.create({
    baseURL: "http://3.226.195.212/api",
    withCredentials: true
});

interceptorsConfiguration()

const response = (response) => response

export const request = {
    getAssessores: async (nome = "") => {
        return await Api.get(`/assessores?nome=${nome}`).then(response.data)
    },
    getAssessoresDetails: async (page = 0, size = 6) => {
        return await Api.get(`/assessores/details?page=${page}&size=${size}`).then(response.data);
    },
    getAssessorInformation: async (assessorId) => {
        return await Api.get(`/assessores/information/${assessorId}`).then(response.data);
    },
    getFornecedoresByCategoria: async (categoriaId, nome = "") => {
        return await Api.get(`/fornecedores/details/categoria/${categoriaId}?nome=${nome}`)
    },
    getFornecedores: async (subcategoriaId, page = 0, size = 6) => {
        return await Api.get(`/fornecedores/details/subcategoria/${subcategoriaId}?size=${size}&page=${page}`).then(response.data)
    },
    getFornecedoresInformation: async(fornecedorId) => {
        return await Api.get(`/fornecedores/information/${fornecedorId}`).then(response.data)
    },
    getCategorias: async () => {
        return await Api.get(`/categorias-servicos`).then(response.data)
    },
    getSubcategorias: async (categoriaId) => {
        return await Api.get(`/subcategorias/categoria/${categoriaId}`).then(response.data)
    },
    getSubcategoriasByNome: async (nome) => {
        return await Api.get(`/subcategorias/categoria/nome/${nome}`).then(response.data)
    },
    saveCasal: async (usuario) => {
        return await Api.post(`/casais`, usuario).then(response)
    },
    saveCasalExterno: async (usuario) => {
        return await Api.post(`/casais/externo`, usuario).then(response)
    },
    verifyUserEmail: async (email) => {
        return await Api.get(`/usuarios/${email}`).then(response)
    },
    authenticate: async (usuario) => {
        return await Api.post(`/authentication`, usuario).then(response)
    },
    resendVerificationEmail: async(email) => {
        return await Api.get(`/usuarios/resend/verification-email/${email}`).then(response)
    },
    saveAssessor: async(usuario) => {
        return await Api.post(`/assessores`, usuario).then(response)
    },
    saveAssessorExterno: async(usuario) => {
        return await Api.post(`/assessores/externo`, usuario).then(response)
    },
    verifyAssessorEmpresaEmailAndCnpj: async(assessorFields) => {
        return await Api.post(`/assessores/validate-fields`, assessorFields).then(response)
    },
    getOrcamentoCasal: async () => {
        return await Api.get(`/orcamentos/casamento`).then(response)
    },
    saveOrcamentoFornecedores: async (orcamentoFornecedorRequest) =>{
        return await Api.post(`/orcamento-fornecedor`, orcamentoFornecedorRequest)
    },
    saveItensOrcamentos: async(itensOrcamentoRequest) => {
        return await Api.post(`/itens-orcamento`, itensOrcamentoRequest)
    },
    saveOrcamentoFornecedor: async(orcamentoFornecedorRequest, categoriaId) => {
        return await Api.post(`/orcamento-fornecedor/categoria/${categoriaId}`, orcamentoFornecedorRequest)
    },
    deleteItemOrcamento: async(id) => {
        return await Api.delete(`/itens-orcamento/${id}`)
    },
    deleteCusto: async(id) => {
        return await Api.delete(`/itens-orcamento/custo/${id}`)
    },
    updateOrcamentoTotal: async(orcamento) => {
        return await Api.put(`/casais/orcamento-total`, {orcamentoTotal: orcamento})
    },
    downloadOrcamentoCsv: async() => {
        return await Api.get(`/orcamentos/csv/casamento`)
    },
    getDashboard: async() => {
        return await Api.get(`/dashboards`)
    },
    vinculateAssessorToWedding: async(assessorId) => {
        return await Api.put(`/casamentos/assessor/${assessorId}/vincular`)
    },
    updatePrecoAssessor: async(assessorId, valor) => {
        return await Api.put(`/assessores/${assessorId}/preco`, {preco: valor})
    },
    updatePrecoOrcamentoFornecedor: async(orcamentoFornecedorId, valor) => {
        return await Api.put(`/orcamento-fornecedor/preco/${orcamentoFornecedorId}`, {preco: valor})
    },
    uploadProfilePicture: async (formData) => {
        return await Api.post(`/casais/imagem-perfil`, formData)
    },
    sendOrcamentoEmail: async(assessorId, solicitarOrcamentoRequest) => {
        return await Api.post(`/assessores/solicitar-orcamento/${assessorId}`, solicitarOrcamentoRequest)
    },
    getTasks: async (params = "") => {
        return  await Api.get(`/tarefas${params}`).then(response.data);
    },
    saveTask: async(tarefa) => {
        return await Api.post(`/tarefas`, tarefa).then(response);
    },
    updateTask: async(taskUpdated) => {
        return await Api.put(`/tarefas/${taskUpdated.id}`, taskUpdated).then(response);
    },
    deleteTask: async(taskId) => {
        return await Api.delete(`/tarefas/${taskId}`).then(response);
    },
    updateCasamentoMessage: async (messageValue) => {
        return await Api.put(`/casamentos/mensagem`, {message: messageValue})
    },
    getConvitesFromCasamento: async (status = "", faixaEtaria = "", categoria="",
        convidado = "", convite = "") => {
            return await Api.get(`/convites?status=${status}
                &faixaEtaria=${faixaEtaria}&categoria=${categoria}&convidado=${convidado}&convite=${convite}`)
    },
    getCategoriasConvidados: async () => {
        return await Api.get(`/categorias-convidados`);
    },
    updateInvite: async (conviteId, convite) => {
        return await Api.put(`/convites/${conviteId}`, convite)
    },
    createConvidado: async (conviteId, convidado) => {
        return await Api.post(`/convidados/convite/${conviteId}`, convidado)
    },
    updateConvidado: async (convidadoId, convidado) => {
        return await Api.put(`/convidados/${convidadoId}`, convidado)
    },
    saveConvite: async (convite) => {
        return await Api.post(`/convites`, convite);
    },
    deleteInvite: async (conviteId) => {
        return await Api.delete(`/convites/${conviteId}`)
    },
    deleteConvidado: async (convidadoId) => {
        return await Api.delete(`/convidados/${convidadoId}`);
    },
    getRelatorio: async() => {
        return await Api.get(`/convites/relatorio`)
    },
    deleteAllInvites: async(casamentoId) => {
        return await Api.delete(`/convites/casamento/${casamentoId}`)
    },
    getConvitesResumo: async() => {
        return await Api.get(`/convites/resumo`)
    },
    getProposals: async() => {
        return await Api.get(`/assessores/casais/pendentes`).then(response.data)
    },
    getAcceptedProposals: async(year) => {
        return await Api.get(`assessores/casamentos/assessorados?ano=${year}`)
    },
    getOrcamento: async() => {
        return await Api.get(`/casamentos/orcamento`).then(response.data)
    },
    acceptProposal: async(casamentoId) => {
        return await Api.put(`casamentos/${casamentoId}/aceitar-proposta`)
    },
    denyProposal: async(casamentoId) => {
        return await Api.put(`casamentos/${casamentoId}/recusar-proposta`)
    } 
}