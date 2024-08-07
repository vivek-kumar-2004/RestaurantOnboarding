import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000', // Base URL for your API
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            // Add 'Bearer ' prefix to the token
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
