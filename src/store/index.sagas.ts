import { all } from 'redux-saga/effects';

import * as pokemonSagas from './pokemon/pokemon.sagas';

function* Sagas() {
  yield all([pokemonSagas.watchSagas()]);
}

export default Sagas;
