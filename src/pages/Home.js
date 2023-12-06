import { useContext, useRef, useEffect, useState } from 'react';
import '../css/home.css';
import Card from '../components/Card';
import { FilterContext } from '../contexts/FilterContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';
import filterpokemonlist from '../tools/filterpokemonlist';

export default function Home() {
  const { pokemonList, filterValue } = useContext(FilterContext);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const { openCardValue, closeCardfunction } = useContext(OpenCardContext);

  useEffect(() => {
    if (openCardValue === 'open') {
      backgroundBlur('on');
    } else if (openCardValue === 'close') {
      backgroundBlur('off');
    }
  }, [openCardValue]);

  const blurry_background = useRef(null);

  useEffect(() => {
    const newFilteredPokemonList = filterpokemonlist(pokemonList, filterValue);
    setFilteredPokemonList(newFilteredPokemonList);
  }, [filterValue, pokemonList]);

  function backgroundBlur(x) {
    const blurry_background_element = blurry_background.current;
    if (x === 'on') {
      $(blurry_background_element).css('display', 'initial');
    } else if (x === 'off') {
      $(blurry_background_element).css('display', 'none');
    }
  }

  var language = 'fr';

  return (
    <>
      <div className="home">
        {filteredPokemonList.map((pokemon) => (
          <Card key={pokemon.id} language={language} pokemon={pokemon} />
        ))}
      </div>
      <div
        ref={blurry_background}
        onClick={closeCardfunction}
        className="background-blur"
      ></div>
    </>
  );
}