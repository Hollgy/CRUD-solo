import axios from 'axios';
import { CorsOptions } from 'cors';

app.use(cors()) // Use this after the variable declaration
const API_BASE_URL = 'https://85bsoz8lsc.execute-api.eu-north-1.amazonaws.com';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export async function fetchItems() {
    try {
        const response = await axios.get(`${API_BASE_URL}/items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
}

export default api;
