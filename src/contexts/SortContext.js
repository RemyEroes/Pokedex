import React, { useContext} from 'react';
import { useState } from 'react';
import { FilterContext } from "./FilterContext";

export const SortContext = React.createContext()


export function SortProvider({ children }) {
  const { pokemonList, typeList } = useContext(FilterContext);
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
 



