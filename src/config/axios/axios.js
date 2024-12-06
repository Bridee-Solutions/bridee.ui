import axios from 'axios';

// TODO: Usar variável de ambiente.
const baseUrl = `http://localhost:8080/api`;
export const Api = axios.create({
    baseURL: baseUrl
    // withCredentials: true
});

const response = (response) => response

export const request = {
    getAssessores: async () => {
        return  await Api.get(`/assessores`).then(response.data);
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
    getProposals: async(idAssessor) => {
        return await Api.get(`/assessores/${idAssessor}/casais/pendentes`).then(response.data)
    },
    getAcceptedProposals: async(assessorId) => {
        return await Api.get(`assessores/${assessorId}/casamentos/assessorados?ano=2024&mes=12`)
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