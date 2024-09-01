import axios from 'axios';

const pexelsUrl = "https://api.pexels.com"
const PexelsApi = axios.create({
    baseURL: pexelsUrl,
    headers: {
        "Authorization": import.meta.env.VITE_PEXELS_KEY
    }
})

const response = (response) => response.data;

export const pexelsRequest = {
    getPhotos: async (search) => {
        return await PexelsApi.get(`/v1/search?query=${search}`).then(response)
    }
}