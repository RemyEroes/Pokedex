import { useContext, useRef, useEffect, useState } from 'react';
import '../css/home.css';
import Card from '../components/Card';
import { FilterContext } from '../contexts/FilterContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';
import filterpokemonlist from '../tools/filterpokemonlist';
import sortpokemonlist from '../tools/sortpokemonlist';
import { SortContext } from '../contexts/SortContext';
import Footer from '../components/Footer';
import { SearchContext } from '../contexts/SearchContext';
import searchpokemonlist from '../tools/searchpokemonlist';
import CloseButton from '../components/CloseButton';
import { PokemonListContext } from '../contexts/PokemonListContext';
import { useTranslation } from 'react-i18next';




export default function Home() {
  //language
  var language = useTranslation().i18n.language;
  //search
  const { searchValue } = useContext(SearchContext);

  // filter
  const { genFilterValue, typeFilterValue } = useContext(FilterContext);

  // sort
  const { pokemonList, sortValue } = useContext(SortContext);
  const [sortedpokemonlist, setsoredtpokemonlist] = useState([]);

  const { openCardValue, closeCardfunction } = useContext(OpenCardContext);

  // liste finale
  const { changePokemonListValue } = useContext(PokemonListContext);


  useEffect(() => {
    if (openCardValue === 'open') {
      backgroundBlur('on');
    } else if (openCardValue === 'close') {
      backgroundBlur('off');
    }
  }, [openCardValue]);

  const blurry_background = useRef(null);

  // MAJ UPDATE
  var lastUpdate = '22 mars 2024 à 10:24';
  useEffect(() => {console.log('Last update:'+ lastUpdate)}, []);

  // sort, filter, search
  useEffect(() => {
    //search
    const newsearchedPokemonList = searchpokemonlist(pokemonList, searchValue, language);

    // filter
    const newFilteredPokemonList = filterpokemonlist(newsearchedPokemonList, genFilterValue, typeFilterValue);

    const cards = document.querySelectorAll('.card-container');

    // Remove fade class
    cards.forEach((card) => {
      card.classList.remove('card-fade');
    });

    // Add fade class
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.add('card-fade');
      });
    }, 50);

    // Remove fade class after animation
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove('card-fade');
      });
    }, 800); // 800 ms is the duration of the fade animation

    // sort
    const newSortedPokemonList = sortpokemonlist(newFilteredPokemonList, sortValue, language);
    setsoredtpokemonlist(newSortedPokemonList);

  }, [searchValue, genFilterValue, typeFilterValue, pokemonList, sortValue, language]);

  // Call changePokemonListValue outside of useEffect if needed
  useEffect(() => {
    // changePokemonListValue(sortedpokemonlist.slice(0, 100));
    changePokemonListValue(sortedpokemonlist);
  }, [sortedpokemonlist, changePokemonListValue]);



  // blurry background
  function backgroundBlur(x) {
    const blurry_background_element = blurry_background.current;
    if (x === 'on') {
      $(blurry_background_element).css('display', 'initial');
    } else if (x === 'off') {
      $(blurry_background_element).css('display', 'none');
    }
  }



  



  return (
    <>
      <div className="home">
        {sortedpokemonlist.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div ref={blurry_background} onClick={closeCardfunction} className="background-blur"></div>
      
      <Footer />
    </>
  );
}

// <CloseButton />