import { Api } from "./axios";

Api.interceptors.request.use(config => {
    const token = localStorage.getItem("access_token")
    config.headers.Authorization = `Bearer ${token}`
})