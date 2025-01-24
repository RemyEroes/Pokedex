import React, { useState, useEffect } from 'react';
import PokemonsJSON from "../data/pokemon.json";
import TypesJSON from "../data/types.json";

export const PokemonContext = React.createContext()

export function PokemonProvider({ children }) {

    const URLPOKEMON = 'https://pokedex-api.3rgo.tech/api/pokemon/';
    const URLTYPE = 'https://pokedex-api.3rgo.tech/api/types';

    const DATA_JSON_URL = "JSON" // ou "URL"

    const [jsonDataPokemon, setJsonDataPokemon] = useState([]);
    const [jsonDataType, setJsonDataType] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDataPokemon = async () => {
        setIsLoading(true);
        if (DATA_JSON_URL === "JSON") {
            setJsonDataPokemon(PokemonsJSON.data);
            setIsLoading(false);
            return;
        }
        else if (DATA_JSON_URL === "URL") {
            const response = await fetch(URLPOKEMON);
            const json = await response.json();
            setJsonDataPokemon(json.data);
            setIsLoading(false);
            return;
        }
    };

    const fetchDataType = async () => {
        if (DATA_JSON_URL === "JSON") {
            setJsonDataType(TypesJSON.data);
            return;
        }
        else if (DATA_JSON_URL === "URL") {
            const response = await fetch(URLTYPE);
            const json = await response.json();
            setJsonDataType(json.data);
            return;
        }
    };

    useEffect(() => {
        fetchDataPokemon();
        fetchDataType();
    }, []);



    const value = { pokemonList: jsonDataPokemon, typeList: jsonDataType, isLoading, setIsLoading }

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
}