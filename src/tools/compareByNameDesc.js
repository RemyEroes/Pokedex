import removeAccents from "./removeAccents";

// tri alphabetique descendant
export default function compareByNameDesc(a, b){

    var language = 'fr';

    // eviter la casse
    const nameA = removeAccents(a['name'][language].toUpperCase());
    const nameB = removeAccents(b['name'][language].toUpperCase());

    if (nameA < nameB) {
        return 1;
    }
    if (nameA > nameB) {
        return -1;
    }
    // noms identiques
    return 0;
};