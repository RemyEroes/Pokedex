export default function filterpokemonlist(pokemonlist, genfilterValue, typefilterValue){
    let pokemonListFiltered = []

    pokemonlist.forEach((pokemon) => {
        let type_pokemon = pokemon["types"]
        
        // eslint-disable-next-line eqeqeq
        if (typefilterValue != 'none'){
            typefilterValue= parseInt(typefilterValue,10)
        }
        // eslint-disable-next-line eqeqeq
        if ((genfilterValue == 'none' || pokemon['generation'] == genfilterValue) && (typefilterValue == 'none' || type_pokemon.includes(typefilterValue) ) ){
            console.log('oui')
            pokemonListFiltered.push(pokemon);
        }
    });

    return pokemonListFiltered;
}