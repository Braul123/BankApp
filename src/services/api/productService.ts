/**
 * @fileoverview ProductService es un servicio que se encarga de realizar las peticiones a la API de productos.
 */

import axios from 'axios';
import { axiosInstance, getApiUrl } from '../utils/apiConfig';

/**
 * @function getProducts
 * @description Obtiene todos los productos.
 * @returns {Promise} Promise que resuelve en un array con los productos.
 */
export const fetchGetProducts = async () => {
    return new Promise(async (resolve, reject) => {
        const API = await getApiUrl();
        axios.get(`${API}bp/products`).then(async (result: any) => {
            resolve(result.data);
        }).catch((error) => {
            reject(error);
            console.error('ERROR EN LA PETICION', error);
        })
    }
)}