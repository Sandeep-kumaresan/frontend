import axios from 'axios';

// Use the environment variable for the base URL
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);
