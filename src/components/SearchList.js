import { useContext, useRef, useEffect } from 'react';
import '../css/searchList.css'
import { PokemonListContext } from '../contexts/PokemonListContext';
import { SearchContext } from '../contexts/SearchContext';
import $ from 'jquery';




export default function SearchList() {

  const { PokemonListValue } = useContext(PokemonListContext);
  const {searchValue } = useContext(SearchContext)

  const list_container = useRef(null)
  const item_container = useRef(null)

  useEffect(() => {
    const ListeElement = list_container.current;
    const lettreRegex = /[a-zA-Z]/;
  
    if (searchValue !== 'none' || lettreRegex.test(searchValue)) {
      $(ListeElement).css('visibility', 'visible');
    } else {
      // Cacher l'élément lorsque searchValue n'est pas égal à 'none' ou s'il contient une lettre
      $(ListeElement).css('visibility', 'hidden');
    }
  
    const ItemElement = item_container.current;
  
    if (PokemonListValue.length <= 9) {
      var height_element = $(ItemElement).height();
      var total_height = PokemonListValue.length * height_element;
      console.log(total_height);
      $(ListeElement).css('height', total_height + 'px');
    }
  }, [searchValue, PokemonListValue]);
  


  return (
    <div ref={list_container} className='search-list-container'>

      {PokemonListValue.map((pokemon) => (
        <div ref={item_container} className='pokemon-item-container' key={pokemon.id} >
          <div className='pokemon-item' >
            <img src={pokemon['image']} className="pokemon-img" alt="pokemon" />
            <p className='pokemon-name'>{pokemon['name']['fr'].normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}





