import { encrypt } from "../../utils/criptografia";
import { Api } from "./axios";

export const interceptorsConfiguration = () => {
    const rotasExcluidasBackEnd = ["/authentication", "/casais","/casais/externo", "/assessores",
        "/assessores/externo", "/assessores/validate-fields", "/usuarios/**", "/refresh-token"]
    
    Api.interceptors.request.use(config => {
        if (rotasExcluidasBackEnd.includes(config.url)) {
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
            
            if(!rotasExcluidasBackEnd.includes(config.url) && error.response){
                if(error.response.status == 401 && !config._retry){
                    config._retry = true;
                    return refreshToken().then(response => {
                        if(response.status == 204){
                            return Api(config)
                        }
                    }).catch((error) => {
                        localStorage.clear()
                        window.location.href = "/login"
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