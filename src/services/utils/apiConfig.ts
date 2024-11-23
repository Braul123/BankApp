
import axios from 'axios';

export function getApiUrl() {
    const URL_API = process.env.API_URL; 
    return `${URL_API}`;
}

export const axiosInstance = axios.create();

// Aqui podriamos poner mas configuraciones de axios, como por ejemplo interceptors