export default function searchPokemonList(pokemonList, searchValue) {
    let pokemonListSearched = [];
    const language = 'fr';

    // ||  searchValue == ''
    if (searchValue !== 'none' ) {
        // enlever les accents, les espaces
        searchValue = searchValue.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        pokemonList.forEach(pokemon => {
            // enlever les accents, les espaces
            // eslint-disable-next-line eqeqeq 
            if (pokemon['name'][language].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchValue) == true){
                pokemonListSearched.push(pokemon)
            }
        });

    } else {
        pokemonListSearched = pokemonList;
    }
   
    return pokemonListSearched;
}