import axios from 'axios';

// TODO: Usar variável de ambiente.
const baseUrl = `http://localhost:8080/api`;
const Api = axios.create({
    baseURL: baseUrl
});

const response = (response) => response.data

export const request = {
    getAssessores: async () => {
        return  await Api.get(`/assessores`).then(response);
    },
    updateCasamentoMessage: async (casamentoId, messageValue) => {
        return await Api.put(`/casamentos/${casamentoId}`, {message: messageValue})
    },
    getConvitesFromCasamento: async (casamentoId, status = "", faixaEtaria = "", 
        categoria = "", convidado = "", convite = "") => {
            return await Api.get(`/convites/casamento/${casamentoId}?status=${status}
                &faixaEtaria=${faixaEtaria}&categoria=${categoria}&convidado=${convidado}&convite=${convite}`)
    },
    updateInvite: async (conviteId, convite) => {
        return await Api.put(`/convites/${conviteId}`, convite)
    },
    deleteInvite: async (conviteId) => {
        return await Api.delete(`/convites/${conviteId}`)
    }
}