import { PokemonContext } from "../contexts/PokemonContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import translateTypes from "../tools/translateTypes";



export default function TypeFilterSelect() {

    const { typeList } = useContext(PokemonContext);

    var language = useTranslation().i18n.language;

    const options = [];

    typeList.forEach(type => {
        var type_trad = translateTypes(type, language)
        if (!options.includes(type_trad)) {
            var typeName = type_trad;
            var typeValue
            
            typeList.forEach(type => {
                // eslint-disable-next-line eqeqeq
                if (type_trad == typeName){
                    typeValue = type['id']
                }
            })
            typeName = type_trad
            options.push(
                <option key={typeValue} value={typeValue}>
                    {typeName}
                </option>
            );
        }
    });

    return <>{options}</>;
};