import axios from 'axios';

const url = import.meta.env.VITE_URL_API;

export const fetchArticles = async () => {
    try {
        const response = await axios.get(`${url}/articles`);
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Error fetching articles');
    }
};