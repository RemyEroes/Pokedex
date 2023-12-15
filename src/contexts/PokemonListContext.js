import React, { useState } from 'react';

export const PokemonListContext = React.createContext()

export function PokemonListProvider({ children }) {
    const [PokemonListValue, setPokemonListValue] = useState([]);

    function changePokemonListValue(list) {
        setPokemonListValue(list)
    };

   
    const value = { PokemonListValue, changePokemonListValue }

    return (
        <PokemonListContext.Provider value={value}>
            {children}
        </PokemonListContext.Provider>
    );
}