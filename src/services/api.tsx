import axios from 'axios';
import {TOKEN_API} from '@env';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {Authorization: `Bearer ${TOKEN_API}`},
  params: {language: 'pt-BR'},
});

export default api;
