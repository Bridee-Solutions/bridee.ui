import axios from 'axios';

// TODO: Usar variável de ambiente.
const baseUrl = `http://localhost:8080`;
const Api = axios.create({
    baseUrl: baseUrl
});

const response = (response) => response.data

const request = {
    getAssessores: async () => {
        return  await Api.get(`/assessores`).then(response);
    }
}