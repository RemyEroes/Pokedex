import React, { useContext} from 'react';
import { useState } from 'react';
import { FilterContext } from "./FilterContext";

export const SortContext = React.createContext()


export function SortProvider({ children }) {
  const { pokemonList, typeList } = useContext(FilterContext);
  const [sortValue, setSortValue] = useState('none')



  function sortOnSelect(filter){
    setSortValue(filter)
  }
  

  const value = { pokemonList, typeList, sortValue, sortOnSelect };

  return (
    <SortContext.Provider value={value}>
      {children}
    </SortContext.Provider>
  );
}
 



