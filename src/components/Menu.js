// Menu.js
import React, { useContext } from 'react';
import '../css/menu.css';
import pokeball_image from '../images/pokeball.svg';
import { FilterContext, PokemonSelect } from '../contexts/FilterContext';

export default function Menu() {
  // Utilisez le hook useContext pour obtenir la valeur du contexte
  const { filter } = useContext(FilterContext);

  // Vous pouvez maintenant appeler la fonction filter dans votre composant
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    filter(selectedValue);
  };

  return (
    <div className="menu">
      <img className="pokeball-logo" src={pokeball_image} alt="pokeball" />
      <div className="filter_div">
        <label htmlFor="categorie">Gen</label>
        <select name="categorie" id="categorie" onChange={handleFilterChange}>
          <option value="">--Veuillez choisir une option--</option>
          <PokemonSelect />
        </select>
      </div>
    </div>
  );
}


//<img className='banniere' src={banniere} alt="banniere"/  >