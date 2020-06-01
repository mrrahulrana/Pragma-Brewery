import axios from './axios';

export const getBeers = () => axios.get('/beers');
