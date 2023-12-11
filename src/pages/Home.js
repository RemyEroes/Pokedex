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
    const newFilteredPokemonList = filterpokemonlist(pokemonList, genFilterValue, typeFilterValue);
    setFilteredPokemonList(newFilteredPokemonList);

    const cards = document.querySelectorAll('.card-container');
    // enleve la classe
    cards.forEach((card) => {
      card.classList.remove('card-fade');
    });

    // Ajoutez la classe aux cartes
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.add('card-fade');
      });
    }, 50);

    // Supprimez la classe après la fin de l'animation
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove('card-fade');
      });
    }, 800); // 800 ms correspond à la durée de l'animation fondu
  }, [genFilterValue, typeFilterValue, pokemonList]);





  //sort
  useEffect(() => {
    const newSortedPokemonList = sortpokemonlist(pokemonList, sortValue);
    setsoredtpokemonlist(newSortedPokemonList);

  }, [pokemonList, sortValue]);



  console.log('Type of sortedpokemonlist:', typeof sortedpokemonlist);



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


// import React, { useContext, useRef, useEffect, useState } from 'react';
// import '../css/home.css';
// import Card from '../components/Card';
// import { FilterContext } from '../contexts/FilterContext';
// import { OpenCardContext } from '../contexts/OpenCardContext';
// import $ from 'jquery';
// import filterpokemonlist from '../tools/filterpokemonlist';
// import Footer from '../components/Footer';

// export default function Home() {
//   const { pokemonList, genFilterValue, typeFilterValue } = useContext(FilterContext);
//   const [filteredPokemonList, setFilteredPokemonList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const { openCardValue, closeCardfunction } = useContext(OpenCardContext);

//   useEffect(() => {
//     if (openCardValue === 'open') {
//       backgroundBlur('on');
//     } else if (openCardValue === 'close') {
//       backgroundBlur('off');
//     }
//   }, [openCardValue]);

//   const blurry_background = useRef(null);

//   useEffect(() => {
//     const newFilteredPokemonList = filterpokemonlist(pokemonList, genFilterValue, typeFilterValue);
//     setFilteredPokemonList(newFilteredPokemonList);

//     const cards = document.querySelectorAll('.card-container');
//     // enleve la classe
//     cards.forEach((card) => {
//       card.classList.remove('card-fade');
//     });

//     // Ajoutez la classe aux cartes
//     setTimeout(() => {
//       cards.forEach((card) => {
//         card.classList.add('card-fade');
//       });
//     }, 50);

//     // Supprimez la classe après la fin de l'animation
//     setTimeout(() => {
//       cards.forEach((card) => {
//         card.classList.remove('card-fade');
//       });
//     }, 800); // 800 ms correspond à la durée de l'animation fondu
//   }, [genFilterValue, typeFilterValue, pokemonList]);

//   // Implement Infinite Scroll
//   const infiniteScrollRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '20px',
//       threshold: 0.1,
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     if (infiniteScrollRef.current) {
//       observer.observe(infiniteScrollRef.current);
//     }

//     return () => {
//       if (infiniteScrollRef.current) {
//         observer.unobserve(infiniteScrollRef.current);
//       }
//     };
//   }, [filteredPokemonList]);

//   const handleIntersection = (entries) => {
//     const entry = entries[0];
//     if (entry.isIntersecting && !loading) {
//       setLoading(true);
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   useEffect(() => {
//     const newFilteredPokemonList = filterpokemonlist(pokemonList, genFilterValue, typeFilterValue);
//     setFilteredPokemonList(newFilteredPokemonList);
//     setLoading(false);
//   }, [genFilterValue, typeFilterValue, currentPage, pokemonList]);

//   const slicedPokemonList = filteredPokemonList.slice(0, currentPage * 50);

//   // Function to handle background blur
//   function backgroundBlur(x) {
//     const blurry_background_element = blurry_background.current;
//     if (x === 'on') {
//       $(blurry_background_element).css('display', 'initial');
//     } else if (x === 'off') {
//       $(blurry_background_element).css('display', 'none');
//     }
//   }

//   var language = 'fr';

//   return (
//     <>
//       <div className="home">
//         {slicedPokemonList.map((pokemon) => (
//           <Card key={pokemon.id} language={language} pokemon={pokemon} />
//         ))}
//         <div ref={infiniteScrollRef} style={{ height: '10px', background: 'transparent' }}></div>
//       </div>
//       <div
//         ref={blurry_background}
//         onClick={closeCardfunction}
//         className="background-blur"
//       ></div>
//       <Footer />
//     </>
//   );
// }
