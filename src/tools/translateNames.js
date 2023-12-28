import pokemons_translated from '../data/pokemon_names_new.json'

export default function translateNames(pokemon, language) {

    var name
    var this_pokemon_translated = pokemons_translated?.find(element => element['id'] === pokemon['id'])


    if (language === 'fr' || language === 'en') {
        name = (pokemon['name'][language]).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    }else if (language === 'ja'){
        
        if (this_pokemon_translated?.['name']){
            name = this_pokemon_translated?.['name'][language]
        }else{
            name = pokemon['name']['en'] 
        }
    }else if (language === 'zh'){
        
        if (this_pokemon_translated?.['name']){
            name = this_pokemon_translated?.['name'][language]
        }else{
            name = pokemon['name']['en'] 
        }
    }
    

    

    return name
   
    
}