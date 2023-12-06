export default function filterpokemonlist(pokemonlist, filterValue){
    let pokemonListFiltered = []
    pokemonlist.forEach((pokemon) => {
        if (filterValue == 'none' || pokemon['generation'] == filterValue){
            console.log('yo')
            pokemonListFiltered.push(pokemon) 
        }
    })
    return pokemonListFiltered    
}