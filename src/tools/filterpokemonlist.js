export default function filterpokemonlist(pokemonlist, genfilterValue, typefilterValue) {
    let pokemonListFiltered = [];
    // console.log(genfilterValue,typefilterValue)

    pokemonlist.forEach((pokemon) => {
        let type_pokemon = pokemon["types"];

        // eslint-disable-next-line eqeqeq
        if (typefilterValue != 'none') {
            typefilterValue = parseInt(typefilterValue, 10);
        } 
        // dev mode
        // else {
        //     typefilterValue = '3';
        // }

        // eslint-disable-next-line eqeqeq
        if ((genfilterValue == 'none' || pokemon['generation'] == genfilterValue) && (typefilterValue == 'none' || type_pokemon.includes(typefilterValue))) {
            // le type filtré en premiere position
            if (type_pokemon.includes(typefilterValue)) {
                const filteredIndex = type_pokemon.indexOf(typefilterValue);
                if (filteredIndex !== -1) {
                    type_pokemon.splice(filteredIndex, 1); // Retirez le type filtré de sa position actuelle
                    type_pokemon.unshift(typefilterValue); // Ajoutez le type filtré en premier
                }
            }

            // push le pokémon
            pokemonListFiltered.push(pokemon);
        }
    });

    return pokemonListFiltered;
}