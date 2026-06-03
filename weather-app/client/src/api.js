import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const getCurrentWeather = (params) =>
  api.get('/weather/current', { params }).then(r => r.data);

export const getForecast = (params) =>
  api.get('/weather/forecast', { params }).then(r => r.data);

export const getHistory = () =>
  api.get('/weather/history').then(r => r.data);

export const clearHistory = () =>
  api.delete('/weather/history').then(r => r.data);
