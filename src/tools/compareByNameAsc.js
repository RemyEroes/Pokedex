import removeAccents from "./removeAccents";

// tri alphabetique ascendant
export default function compareByNameAsc(a, b){

    var language = 'en';

     // eviter la casse
    const nameA = removeAccents(a['name'][language].toUpperCase());
    const nameB = removeAccents(b['name'][language].toUpperCase());

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
     // noms identiques
    return 0;
};

// export default function compareByNameAsc(a, b, language) {


//     var nameA;
//     var nameB;
//     // eviter la casse
//     if (language === 'en' || language === 'fr') {
//         nameA = removeAccents(a['name'][language].toUpperCase());
//         nameB = removeAccents(b['name'][language].toUpperCase());
//     }
//     else {
//         nameA = t(a, language);
//         nameB = t(b, language);
//     }



//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     // noms identiques
//     return 0;
// };