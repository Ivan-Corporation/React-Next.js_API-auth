import axios from 'axios'


const api = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://react-next-js-api-auth.vercel.app/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
export default api;