// export default function sortpokemonlist(pokemonlist, sortValue) {
//     let pokemonListSorted = [];




//     // const sort_options = {
//     //     "Numero": "🔢",
//     //     "Alphabetique": "🔡",
//     //     "Poids": "⚖️",
//     //     "Taille": "📏",
//     // };

//     // const sort_type = {
//     //     "croissant": "⬆️",
//     //     "decroissant": "⬇️",
//     // };
//     console.log(sortValue)
//     // eslint-disable-next-line eqeqeq
//     if (sortValue != 'none') {
//         switch (sortValue) {
//             case 'Numerocroissant':
//                 const entriesAsc = Object.entries(pokemonlist).sort((a, b) => a[1].id - b[1].id);
//                 pokemonListSorted = Object.fromEntries(entriesAsc);
//                 console.log(JSON.stringify(entriesAsc));
//                 break;

//             case 'Numerodecroissant':
//                 const entriesDesc = Object.entries(pokemonlist).sort((a, b) => b[1].id - a[1].id);
//                 pokemonListSorted = Object.fromEntries(entriesDesc);
//                 break;

//             default:
//                 break
//         }
//     } else {
//         pokemonListSorted = pokemonlist
//     }

//     return pokemonListSorted;
// }
export default function sortpokemonlist(pokemonlist, sortValue) {
    let pokemonListSorted = [];

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

            
            default:
                break;
        }
    } else {
        pokemonListSorted = Object.values(pokemonlist);
    }

    return pokemonListSorted;
}
