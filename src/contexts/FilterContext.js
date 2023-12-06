import React, { useContext} from 'react';
import { useState, useEffect } from 'react';
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
          {generation}
        </option>
      );
    }
  }

  return <>{options}</>;
};

export function FilterProvider({ children }) {
  const { pokemonList, typeList } = useContext(PokemonContext);
  const [filterValue, setFilterValue] = useState('none')
  // const [jsonDataPokemon, setJsonDataPokemon] = useState([]);
  // const [jsonDataType, setJsonDataType] = useState([]);

  function filterOnSelect(filter){
    setFilterValue(filter)
  }

  

  const value = { pokemonList: pokemonList, typeList: typeList, filterValue , filterOnSelect};

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
 



