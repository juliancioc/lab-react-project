import axios from 'axios';

const baseUrl = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export { baseUrl };
