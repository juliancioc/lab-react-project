import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { getPokemons } from '../../store/pokemon/pokemon.ducks';
import { PokemonProps } from '../../store/pokemon/pokemon.sagas';

export const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state: RootState) => state.pokemons);

  console.log('pokemons', pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map((item: PokemonProps, idx: number) => (
          <li key={idx}>Name: {item.name}</li>
        ))}
      </ul>
    </div>
  );
};
