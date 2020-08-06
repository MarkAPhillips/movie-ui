/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const authApi = axios.create({
  baseURL: `${window._env_.AUTH_API_URL}/auth`,
});

authApi.interceptors.response.use((response) => response,
  (error) => Promise.reject(error.response));

export { authApi };
