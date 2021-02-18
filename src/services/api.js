import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://mgdelivery.ga',
    baseURL: 'http://192.168.1.7:3333',
});

export default api;
