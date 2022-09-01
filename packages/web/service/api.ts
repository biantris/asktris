import axios from 'axios';

import { BASE_URL_BACKEND } from '../environments/values';

const service = axios.create({
  baseURL: BASE_URL_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default service;
