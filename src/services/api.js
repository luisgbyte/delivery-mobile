import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mgdelivery.ga',
});

export default api;
