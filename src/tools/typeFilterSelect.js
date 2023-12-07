import { PokemonContext } from "../contexts/PokemonContext";
import { useContext } from "react";

const language = 'fr'


export default function TypeFilterSelect() {

    const { typeList } = useContext(PokemonContext);

    const options = [];

    typeList.forEach(type => {
        if (!options.includes(type["name"][language])) {
            var typeName = type["name"][language];
            var typeValue
            
            typeList.forEach(type => {
                // eslint-disable-next-line eqeqeq
                if (type["name"][language] == typeName){
                    typeValue = type['id']
                }
            })
            typeName = typeName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            options.push(
                <option key={typeValue} value={typeValue}>
                    {typeName}
                </option>
            );
        }
    });

    return <>{options}</>;
};