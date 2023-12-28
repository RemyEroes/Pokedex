import types_translated from '../data/types_trad.json'

export default function translateTypes(type, language) {

    var type_return
    var this_type_translated = types_translated?.find(element => element['id'] === type['id'])


    if (language === 'fr' || language === 'en') {
        type_return = (type['name'][language]).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
        // .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    }else if (language === 'ja'){
        if (this_type_translated?.['name']){
            type_return = this_type_translated?.['name'][language]
        }else{
            type_return = type['name']['en'] 
        }
    }else if (language === 'zh'){
        
        if (this_type_translated?.['name']){
            type_return = this_type_translated?.['name'][language]
        }else{
            type_return = type['name']['en'] 
        }
    }
    
    return type_return
   
    
}