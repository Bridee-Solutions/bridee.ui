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
    } 
}