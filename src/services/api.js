import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://localhost:3000', emulador ios
  // baseURL: 'http://10.0.2.2:3000' //android-studio
  baseURL: 'http://10.0.3.2:3000', // genymotion
});

export default api;
