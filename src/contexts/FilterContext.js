import React, { useContext} from 'react';
import { useState } from 'react';
import { SearchContext } from "./SearchContext";


export const FilterContext = React.createContext()


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
 



