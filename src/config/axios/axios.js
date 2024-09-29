import axios from 'axios';

// TODO: Usar variável de ambiente.
const baseUrl = `http://localhost:8080`;
export const Api = axios.create({
    baseURL: baseUrl,
    withCredentials: true
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
    }
}