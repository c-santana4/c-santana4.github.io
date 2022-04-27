export const API_KEY = 'api_key=4c1afb4602ea5eda06ae9d8071e79722';
export const BASE_URL = `https://api.themoviedb.org/3/movie/`;
export const IMG_URL = `https://image.tmdb.org/t/p/w300`;
export const language = 'language=pt-BR';

let url;
let params;

export function baseURL(id) {
    if (BASE_URL === "https://api.themoviedb.org/3/movie/") {
        params = `${id}?${API_KEY}`;
        url = BASE_URL + params;
        return url
    }
    else {
        params = `${id}?${API_KEY}`;
        url = BASE_URL + params
        return url
    }
}