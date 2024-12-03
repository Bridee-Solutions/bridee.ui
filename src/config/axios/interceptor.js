import { Api } from "./axios";

const rotasExcluidas = ["/login", "/", "/cadastrar", "/reenviar-email"]

Api.interceptors.request.use(config => {
    if (rotasExcluidas.includes(config.url || "")) {
        return config;
      }
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
})