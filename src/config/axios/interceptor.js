import { encrypt } from "../../utils/criptografia";
import { Api } from "./axios";

export const interceptorsConfiguration = () => {
    const rotasExcluidas = ["/login", "/", "/cadastrar", "/reenviar-email"]
    
    Api.interceptors.request.use(config => {
        if (rotasExcluidas.includes(config.url)) {
            return config;
        }
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })
    
    Api.interceptors.response.use((response) => {
        return response
        }, (error) => {
            const config = error.config
    
            if(!rotasExcluidas.includes(config.url) && error.response){
                if(error.response.status == 401 && !config._retry){
                    return refreshToken().then(response => {
                        if(response.status == 204){
                            return Api(config)
                        }
                    }).catch((error) => {
                        if(error.status == 401){
                            localStorage.clear();
                            return Promise.reject(error)
                        }
                    }).finally(() => {
                        config._retry = true;
                    })
                }
            }
            return Promise.reject(error);
        }
    )
}

const refreshToken = async () => {
    return await Api.post(`/refresh-token`);
}