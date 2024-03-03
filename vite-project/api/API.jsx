import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' }); // Adjust the base URL to your Spring Boot app's

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }

    return req;
});

export default API;
