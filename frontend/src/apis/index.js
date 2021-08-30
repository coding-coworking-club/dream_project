import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});


export const search = (query) =>
    {console.log(`query${query}`)
        api.get(`search?q=${query}`).then((res) => res.data);}