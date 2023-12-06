import React, { useContext} from 'react';
import { useState} from 'react';
import { PokemonContext } from "./PokemonContext";

export const FilterContext = React.createContext()

export const PokemonSelect = () => {
  let generation = 0;
  const { pokemonList } = useContext(PokemonContext);

  const options = [];

  for (const pokemon of pokemonList) {
    if (pokemon.generation > generation) {
      generation = pokemon.generation;
      options.push(
        <option key={generation} value={generation}>
          Gen {generation}
        </option>
      );
    }
  }

  return <>{options}</>;
};

export function FilterProvider({ children }) {
  const { pokemonList } = useContext(PokemonContext);
  const [jsonDataPokemon, setJsonDataPokemon] = useState([]);
  const [jsonDataType, setJsonDataType] = useState([]);

  const value = { pokemonList: jsonDataPokemon, typeList: jsonDataType };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
 



