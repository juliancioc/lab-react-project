import { baseUrl } from '../../../services';

export const getPokemonData = async () => {
  const { data } = await baseUrl.get('pokemon?limit=20&offset=0');

  return data.results;
};
