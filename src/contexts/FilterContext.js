import React, { useContext} from 'react';
import { useState } from 'react';
import { SearchContext } from "./SearchContext";

export const FilterContext = React.createContext()

export const GenFilterSelect = () => {
  let generation = 0;
  const { pokemonList } = useContext(SearchContext);

  const options = [];

  for (const pokemon of pokemonList) {
    if (pokemon.generation > generation) {
      generation = pokemon.generation;
      options.push(
        <option key={generation} value={generation}>
          Generation {generation}
        </option>
      );
    }
  }

  return <>{options}</>;
};





export function FilterProvider({ children }) {
  const { pokemonList, typeList } = useContext(SearchContext);
  const [genFilterValue, setGenFilterValue] = useState('none')
  const [typeFilterValue, setTypeFilterValue] = useState('none')



  function genFilterOnSelect(filter){
    setGenFilterValue(filter)
  }

  function typeFilterOnSelect(filter){
    setTypeFilterValue(filter)
  }

  

  const value = { pokemonList, typeList, genFilterValue , genFilterOnSelect, typeFilterValue, typeFilterOnSelect };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
 



