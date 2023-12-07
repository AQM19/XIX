import axios from 'axios';

const projectsApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export default projectsApi;