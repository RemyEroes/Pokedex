
export default function searchPokemonList(pokemonList, searchValue, language) {
    let pokemonListSearched = [];

   
    if (searchValue !== 'none' ) {
        if(language==='fr'||language==='en'){
        searchValue = searchValue.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        pokemonList.forEach(pokemon => {
            // eslint-disable-next-line eqeqeq 
            if (pokemon['name'][language].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchValue) == true){
                pokemonListSearched.push(pokemon)
            }
        });
    }

    } else {
        pokemonListSearched = pokemonList;
    }
   
    return pokemonListSearched;
}