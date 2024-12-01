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
        convidado = "", convite = "") => {
            return await Api.get(`/convites/casamento/${casamentoId}?status=${status}
                &faixaEtaria=${faixaEtaria}&convidado=${convidado}&convite=${convite}`)
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
    }
}