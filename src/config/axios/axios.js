import axios from 'axios';
import { interceptorsConfiguration } from './interceptor';

const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const Api = axios.create({
    baseURL: baseUrl,
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
    getOrcamentoCasal: async (casalId) => {
        return await Api.get(`/orcamentos/casamento/${casalId}`).then(response)
    },
    saveOrcamentoFornecedores: async (orcamentoFornecedorRequest) =>{
        return await Api.post(`/orcamento-fornecedor`, orcamentoFornecedorRequest)
    },
    saveItensOrcamentos: async(itensOrcamentoRequest) => {
        return await Api.post(`/itens-orcamento`, itensOrcamentoRequest)
    },
    saveOrcamentoFornecedor: async(orcamentoFornecedorRequest, categoriaId, casamentoId) => {
        return await Api.post(`/orcamento-fornecedor/categoria/${categoriaId}/casamento/${casamentoId}`, orcamentoFornecedorRequest)
    },
    deleteItemOrcamento: async(id) => {
        return await Api.delete(`/itens-orcamento/${id}`)
    },
    deleteCusto: async(id) => {
        return await Api.delete(`/itens-orcamento/custo/${id}`)
    },
    updateOrcamentoTotal: async(orcamento, casalId) => {
        return await Api.put(`/casais/orcamento-total/${casalId}`, {orcamentoTotal: orcamento})
    },
    downloadOrcamentoCsv: async(casalId) => {
        return await Api.get(`/orcamentos/csv/casamento/${casalId}`)
    },
    getDashboard: async(casamentoId) => {
        return await Api.get(`/dashboards/casamento/${casamentoId}`)
    },
    vinculateAssessorToWedding: async(casamentoId, assessorId) => {
        return await Api.put(`/casamentos/${casamentoId}/assessor/${assessorId}`)
    },
    updatePrecoAssessor: async(assessorId, casamentoId, valor) => {
        return await Api.put(`/assessores/${assessorId}/casamento/${casamentoId}`, {preco: valor})
    },
    updatePrecoOrcamentoFornecedor: async(orcamentoFornecedorId, valor) => {
        return await Api.put(`/orcamento-fornecedor/preco/${orcamentoFornecedorId}`, {preco: valor})
    },
    uploadProfilePicture: async (casalId, formData) => {
        return await Api.post(`/casais/imagem-perfil/${casalId}`, formData)
    },
    sendOrcamentoEmail: async(assessorId, solicitarOrcamentoRequest) => {
        return await Api.post(`/assessores/solicitar-orcamento/${assessorId}`, solicitarOrcamentoRequest)
    },
    getTasks: async (casamentoId, params = "") => {
        return  await Api.get(`/tarefas/casamento/${casamentoId}${params}`).then(response.data);
    },
    saveTask: async(casamentoId, tarefa) => {
        return await Api.post(`/tarefas/casamento/${casamentoId}`, tarefa).then(response);
    },
    updateTask: async(casamentoId, taskUpdated) => {
        return await Api.put(`/tarefas/casamento/${casamentoId}/tarefa/${taskUpdated.id}`, taskUpdated).then(response);
    },
    deleteTask: async(taskId) => {
        return await Api.delete(`/tarefas/${taskId}`).then(response);
    },
    updateCasamentoMessage: async (casamentoId, messageValue) => {
        return await Api.put(`/casamentos/${casamentoId}`, {message: messageValue})
    },
    getConvitesFromCasamento: async (casamentoId, status = "", faixaEtaria = "", categoria="",
        convidado = "", convite = "") => {
            return await Api.get(`/convites/casamento/${casamentoId}?status=${status}
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
    getRelatorio: async(casamentoId) => {
        return await Api.get(`/convites/casamento/${casamentoId}/relatorio`)
    },
    deleteAllInvites: async(casamentoId) => {
        return await Api.delete(`/convites/casamento/${casamentoId}`)
    },
    getConvitesResumo: async(casamentoId) => {
        return await Api.get(`/convites/casamento/${casamentoId}/resumo`)
    },
    getProposals: async(idAssessor) => {
        return await Api.get(`/assessores/${idAssessor}/casais/pendentes`).then(response.data)
    },
    getAcceptedProposals: async(assessorId, year) => {
        return await Api.get(`assessores/${assessorId}/casamentos/assessorados?ano=${year}`)
    },
    getOrcamento: async(casamentoId) => {
        return await Api.get(`/casamentos/${casamentoId}/orcamento`).then(response.data)
    },
    acceptProposal: async(casamentoId, assessorId) => {
        return await Api.put(`casamentos/${casamentoId}/assessor/${assessorId}/aceitar-proposta`)
    },
    denyProposal: async(casamentoId, assessorId) => {
        return await Api.put(`casamentos/${casamentoId}/assessor/${assessorId}/recusar-proposta`)
    } 
}