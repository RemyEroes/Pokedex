import compareByNameAsc from "./compareByNameAsc";
import compareByNameDesc from "./compareByNameDesc";
import { useTranslation } from 'react-i18next';


export default function sortpokemonlist(pokemonlist, sortValue) {
    let pokemonListSorted = [];
    // // var language = 'fr';
    //  // var language = 'fr';
    // // var language = useTranslation().i18n.language;
    // const { i18n } = useTranslation();
    // var language = i18n.language;
    // console.log(language)

    // eslint-disable-next-line eqeqeq
    if (sortValue !== 'none') {
        const lowerCaseSortValue = sortValue.toLowerCase();

        switch (lowerCaseSortValue) {
            case 'numerocroissant':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.id - b.id);
                break;

            case 'numerodecroissant':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => b.id - a.id);
                break;

            case 'alphabetiquecroissant':
                pokemonListSorted = pokemonlist.sort(compareByNameAsc);
                break;

            case 'alphabetiquedecroissant':
                pokemonListSorted = pokemonlist.sort(compareByNameDesc);
                break;

            case 'poidscroissant':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.weight - b.weight);
                break;

            case 'poidsdecroissant':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => b.weight - a.weight);
                break;
                
            case 'taillecroissant':
                pokemonListSorted = Object.values(pokemonlist).sort((a, b) => a.height - b.height);
                break;

            case 'tailledecroissant':
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
