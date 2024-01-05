import { useContext, useRef, useEffect } from 'react';
import '../css/searchList.css'
import { PokemonListContext } from '../contexts/PokemonListContext';
import { SearchContext } from '../contexts/SearchContext';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import translateNames from '../tools/translateNames';





export default function SearchList() {
  var language = useTranslation().i18n.language;

  const { PokemonListValue } = useContext(PokemonListContext);
  const { searchValue } = useContext(SearchContext)


  const list_container = useRef(null)
  const item_container = useRef(null)



  useEffect(() => {
    const ListeElement = list_container.current;
    const lettreRegex = /[a-zA-Z]/;

  
    if (searchValue !== 'none' || lettreRegex.test(searchValue)) {
      $(ListeElement).css('visibility', 'visible');
      $(ListeElement).css('display', 'initial');
    } else {
      $(ListeElement).css('visibility', 'hidden');
      $(ListeElement).css('display', 'none');
    }
  
    const ItemElement = item_container.current;
  
    if (PokemonListValue.length <= 9) {
      var height_element = Math.round($(ItemElement).height());
      var total_height = PokemonListValue.length * height_element;
      $(ListeElement).css('height', total_height + 'px');
    }
  }, [searchValue, PokemonListValue]);


  return (
    <div ref={list_container} className='search-list-container'>

      {PokemonListValue.map((pokemon) => (
        <div ref={item_container} className='pokemon-item-container' key={pokemon.id} >
          <div className='pokemon-item' >
            <img src={pokemon['image']} className="pokemon-img" alt="pokemon" />
            <p className='pokemon-name'>{translateNames(pokemon, language)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}





