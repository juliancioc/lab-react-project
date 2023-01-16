import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  pokemons: []
};

export const getPokemons = createAction('GET_POKEMONS');
export const getPokemonsSuccess = createAction('GET_POKEMONS_SUCCESS');

export default createReducer(INITIAL_STATE, {
  [getPokemonsSuccess.type]: (state, action) => ({
    ...state,
    pokemons: action.payload
  })
});
