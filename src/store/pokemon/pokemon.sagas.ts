import { put, takeLatest } from 'redux-saga/effects';

import { getPokemons, getPokemonsSuccess } from './pokemon.ducks';
import { getPokemonData } from './../../view/Pokemon/services/index';

export type PokemonProps = {
  name: string;
};

export function* loadPokemons() {
  try {
    const pokemons: PokemonProps = yield getPokemonData();
    yield put({ type: getPokemonsSuccess, payload: pokemons });
  } catch {
    console.error('error');
  }
}

export function* watchSagas() {
  yield takeLatest(getPokemons.type, loadPokemons);
}
