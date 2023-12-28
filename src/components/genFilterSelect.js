import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";



export default function GenFilterSelect(){
    let generation = 0;
    const { pokemonList } = useContext(SearchContext);
    const { t } = useTranslation();
    
  
    const options = [];
  
    for (const pokemon of pokemonList) {
      if (pokemon.generation > generation) {
        generation = pokemon.generation;
        options.push(
          <option key={generation} value={generation}>
            {t('generation')+' '} {generation}
          </option>
        );
      }
    }
  
    return <>{options}</>;
  };