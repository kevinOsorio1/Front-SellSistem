const axios = require('axios');
export const API = axios.create({
    baseURL: 'http://localhost:4000/',
  });