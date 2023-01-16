import { baseUrl } from '../../../services';

export const getPokemonData = async () => {
  const { data } = await baseUrl.get('/pokemon/1/');

  return data;
};
