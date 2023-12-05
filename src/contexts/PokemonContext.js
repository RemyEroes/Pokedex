import React, { useState, useEffect } from 'react';

export const PokemonContext = React.createContext()

export function PokemonProvider({ children }) {

    const URLPOKEMON = 'https://pokedex-api.3rgo.tech/api/pokemon/';
    const URLTYPE = 'https://pokedex-api.3rgo.tech/api/types';

    const [jsonDataPokemon, setJsonDataPokemon] = useState([]);
    const [jsonDataType, setJsonDataType] = useState([]);
    // const [loading, setLoading] = useState(false);

    const fetchDataPokemon = async () => {
        // if(!loading){
        //     setLoading(true);
            const response = await fetch(URLPOKEMON);
            const json = await response.json();
            setJsonDataPokemon(json.data);
        //     setLoading(false);
        // }
    };

    const fetchDataType = async () => {
        // if(!loading){
        //     setLoading(true);
            const response = await fetch(URLTYPE);
            const json = await response.json();
            setJsonDataType(json.data);
            // setLoading(false);
        // }
    };

    useEffect(() => {
        fetchDataPokemon();
        fetchDataType();
    }, []);

    const value = {pokemonList: jsonDataPokemon, typeList: jsonDataType }

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
}