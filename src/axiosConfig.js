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
// Response Interceptor
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // If the error status is 401, the token might be expired
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/signin'; // Redirect to sign-in page
        }
        return Promise.reject(error);
    }
);


export default instance;
