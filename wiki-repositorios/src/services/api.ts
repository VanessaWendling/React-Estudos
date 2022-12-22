import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.github.com'
});


export const getRepo = async (repositorio: string) => {
    const urlRepos = '/repos/VanessaWendling/'
    return api.get(urlRepos + repositorio);
}

