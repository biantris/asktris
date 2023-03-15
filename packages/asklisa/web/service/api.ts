import axios from 'axios';

//import { BASE_URL_BACKEND } from '../environments/values';

const service = axios.create({
  baseURL: 'http://localhost:9000',
});

export default service;
