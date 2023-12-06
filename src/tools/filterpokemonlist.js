export default function filterpokemonlist(pokemonlist, filterValue){
    let pokemonListFiltered = []
    pokemonlist.forEach((pokemon) => {
        // eslint-disable-next-line eqeqeq
        if (filterValue == 'none' || pokemon['generation'] == filterValue){
            pokemonListFiltered.push(pokemon) 
        }
    })
    return pokemonListFiltered

}