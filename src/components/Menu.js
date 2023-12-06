// Menu.js
import React, { useContext } from 'react';
import '../css/menu.css';
import pokeball_image from '../images/pokeball.svg';
import { FilterContext, PokemonSelect } from '../contexts/FilterContext';

export default function Menu() {
  const {  filterOnSelect  } = useContext(FilterContext);

  const filterChanged = (event) => {
    const selectedValue = event.target.value;
    filterOnSelect(selectedValue)
  };

  return (
    <div className="menu">
      <img className="pokeball-logo" src={pokeball_image} alt="pokeball" />
      <div className="filter_div">
        <label htmlFor="categorie">Gen</label>
        <select name="categorie" id="categorie" onChange={ filterChanged }>
          <option value="none">Generation</option>
          <PokemonSelect />
        </select>
      </div>
    </div>
  );
}


