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



export default function Home() {
  // filter
  const { genFilterValue, typeFilterValue } = useContext(FilterContext);
  // const { pokemonList, genFilterValue, typeFilterValue } = useContext(FilterContext);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  // sort
  const { pokemonList,  sortValue} = useContext(SortContext);
  const [sortedpokemonlist, setsoredtpokemonlist] = useState([]);

  const { openCardValue, closeCardfunction } = useContext(OpenCardContext);

  useEffect(() => {
    if (openCardValue === 'open') {
      backgroundBlur('on');
    } else if (openCardValue === 'close') {
      backgroundBlur('off');
    }
  }, [openCardValue]);

  const blurry_background = useRef(null);


  // // generation
  useEffect(() => {
    // filter
    const newFilteredPokemonList = filterpokemonlist(pokemonList, genFilterValue, typeFilterValue);
    setFilteredPokemonList(newFilteredPokemonList);
  
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
    const newSortedPokemonList = sortpokemonlist(newFilteredPokemonList, sortValue);
    setsoredtpokemonlist(newSortedPokemonList);
  }, [genFilterValue, typeFilterValue, pokemonList, sortValue]);





  // blurry background
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
        {sortedpokemonlist.map((pokemon) => (
          <Card key={pokemon.id} language={language} pokemon={pokemon} />
        ))}
      </div>
      <div
        ref={blurry_background}
        onClick={closeCardfunction}
        className="background-blur"
      ></div>
      <Footer />
    </>
  );
}

