import React, { useContext } from 'react';
import { useState } from 'react';
import { PokemonContext } from './PokemonContext';

export const SearchContext = React.createContext()


export function SearchProvider({ children }) {
  const { pokemonList, typeList } = useContext(PokemonContext);
  const [searchValue, setsearchValue] = useState('none')



  function searchOnChange(filter) {
    setsearchValue(filter)
  }


  const value = { pokemonList, typeList, searchValue, searchOnChange };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}




