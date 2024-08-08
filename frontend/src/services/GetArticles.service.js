import axios from 'axios';

const url = "http://localhost:3006/api"

export const fetchArticles = async () => {
    try {
        const response = await axios.get(url+'/articles');
        return response.data;
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Error fetching articles');
    }
};