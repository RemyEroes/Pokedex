import compareByNameAsc from "./compareByNameAsc";
import compareByNameDesc from "./compareByNameDesc";
import PokemonNameList from "../data/pokemon_names_new_new.json";


export default function sortpokemonlist(pokemonlist, sortValue, language) {
    let pokemonListSorted = [];
    // var language = 'fr'
    
// 'none' = none
// 'numerocroissant' = 1
// 'numerodecroissant'=2
// 'alphabetiquecroissant'=3
// 'alphabetiquedecroissant'=4
// 'poidscroissant'=5
// 'poidsdecroissant'=6
// 'taillecroissant'=7
// 'tailledecroissant'=8

    // eslint-disable-next-line eqeqeq
    if (sortValue !== 'none') {
        const lowerCaseSortValue = sortValue.toLowerCase();

        switch (lowerCaseSortValue) {
            case '1':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.id - b.id);
                break;

            case '2':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => b.id - a.id);
                break;

            // case '3':
            //     pokemonListSorted = pokemonlist.sort(compareByNameAsc);
            //     break;
            case '3':
                var PokemonNameListSorted = PokemonNameList.sort((a, b) => {

                    var nameA
                    var nameB
                    // pas de upper case pour le japonais et le chinois
                    if (language === 'en' || language === 'fr') {
                        nameA = a['name'][language].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        nameB = b['name'][language].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    }else{
                        nameA = a['name'][language];
                        nameB = b['name'][language];
                    }
                
                    console.log(nameA, nameB)
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // Noms identiques
                    return 0;
                });

                PokemonNameListSorted.forEach(element => {
                    var correspondingPokemon = pokemonlist.find(pokemon => pokemon.id === element.id)
                    pokemonListSorted.push(correspondingPokemon)
                });

                break;

            case '4':
                var PokemonNameListSortedReverse = PokemonNameList.sort((a, b) => {

                    var nameA
                    var nameB
                    // pas de upper case pour le japonais et le chinois
                    if (language === 'en' || language === 'fr') {
                        nameA = a['name'][language].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        nameB = b['name'][language].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    }else{
                        nameA = a['name'][language];
                        nameB = b['name'][language];
                    }
                
                    console.log(nameA, nameB)
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    // Noms identiques
                    return 0;
                });

                PokemonNameListSortedReverse.forEach(element => {
                    var correspondingPokemon = pokemonlist.find(pokemon => pokemon.id === element.id)
                    pokemonListSorted.push(correspondingPokemon)
                });
                break;

            case '5':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.weight - b.weight);
                break;

            case '6':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => b.weight - a.weight);
                break;
                
            case '7':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.height - b.height);
                break;

            case '8':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => b.height - a.height);
                break;

            default:
                break;
        }
    } else {
        pokemonListSorted = Object.values(pokemonlist);
    }

    return pokemonListSorted;
}
