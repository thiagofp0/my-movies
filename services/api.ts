import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://imdb.iamidiotareyoutoo.com',
  timeout: 1000,
});

export default api;
