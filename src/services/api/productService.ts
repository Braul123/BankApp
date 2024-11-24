/**
 * @fileoverview ProductService es un servicio que se encarga de realizar las peticiones a la API de productos.
 */

import { axiosInstance, getApiUrl } from '../utils/apiConfig';
import { ProductType } from '../../types/types';

/**
 * @function getProducts
 * @description Obtiene todos los productos.
 * @returns {Promise} Promise que resuelve en un array con los productos.
 */
export const fetchGetProducts = async () => {
    return new Promise(async (resolve, reject) => {
        const API = await getApiUrl();
        axiosInstance.get(`${API}bp/products`).then(async (result: any) => {
            resolve(result.data);
        }).catch((error) => {
            reject(error);
            console.error('ERROR EN LA PETICION', error);
        })
    }
)}

/**
 * @function fetchCreateProduct
 * @description Crea un producto.
 */
export const fetchCreateProduct = async (data: ProductType) => {
    return new Promise(async (resolve, reject) => {
        const API = await getApiUrl();
        axiosInstance.post(`${API}bp/products`, data).then(async (result: any) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
            console.error('ERROR EN LA PETICION', error);
        })
    }
)}

/**
 * @function verificationID
 * @description Verifica si el ID del producto ya existe.
 */
export const verificationID = async (id: string) => {
    return new Promise(async (resolve, reject) => {
        const API = await getApiUrl();
        axiosInstance.get(`${API}bp/products/verification/${id}`).then(async (result: any) => {
            resolve(result.data);
        }).catch((error) => {
            reject(error);
            console.error('ERROR EN LA PETICION', error);
        })
    }
)}