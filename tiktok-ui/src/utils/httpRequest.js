import axios from 'axios';

const httphttpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await httphttpRequest.get(path, options);
    return response.data;
};

export default httphttpRequest;
