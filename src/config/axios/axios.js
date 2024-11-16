import axios from 'axios';

// TODO: Usar variável de ambiente.
const baseUrl = `http://localhost:8080/api`;
export const Api = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

const response = (response) => response

export const request = {
    getAssessores: async () => {
        return await Api.get(`/assessores/details`).then(response.data);
    },
    getFornecedores: async (subcategoriaId) => {
        return await Api.get(`/fornecedores/details/subcategoria/${subcategoriaId}`).then(response.data)
    },
    getFornecedoresInformation: async(fornecedorId) => {
        return await Api.get(`/fornecedores/information/${fornecedorId}`).then(response.data)
    },
    getCategorias: async () => {
        return await Api.get(`/categorias-servicos`).then(response.data)
    },
    getSubcategorias: async (categoriaId) => {
        return await Api.get(`subcategorias/${categoriaId}`).then(response.data)
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
        return await Api.get(`/orcamentos/casal/${casalId}`).then(response)
    },
    saveOrcamentoFornecedores: async (orcamentoFornecedorRequest) =>{
        return await Api.post(`/orcamento-fornecedor`, orcamentoFornecedorRequest)
    },
    saveItensOrcamentos: async(itensOrcamentoRequest) => {
        return await Api.post(`/itens-orcamento`, itensOrcamentoRequest)
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
        return await Api.get(`/orcamentos/csv/casal/${casalId}`)
    }
}