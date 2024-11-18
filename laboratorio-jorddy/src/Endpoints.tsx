//En este documento guardamos la ruta principal de nuestra API que se mantiene

const BASE_URL = "http://localhost:3015/api/route/";

const API_ENDPOINTS = {
    obtenerTodosLosPaises: `${BASE_URL}/ObtenerTodosLosPaises`,
    ValidarCredencialesLogin: `${BASE_URL}/ValidarCredencialesLogin`,
}

export default API_ENDPOINTS;