import React, { useContext, useEffect, useState } from 'react';
import '../css/menu.css';
import { FilterContext, PokemonSelect } from '../contexts/FilterContext';
import get_banner_from_width from '../tools/get_banner_from_width';
import $ from 'jquery'


// clock
import clock_img from '../images/assets/clock.svg'


export default function Menu() {
  const {  filterOnSelect  } = useContext(FilterContext);

  // banner from width
  const [windowWidth] = useState(window.innerWidth);
  const [bannerSRC, setBannerSRC] = useState('');

  const menu_element = $('.menu');
  const banner_element = $('.banniere');


  useEffect(()=>{
    // banner
    setBannerSRC(get_banner_from_width());

    // menu height
    var height = banner_element.height()+'px'
    menu_element.css('height',height)

  },[windowWidth, banner_element, menu_element])


  // filter
  const filterChanged = (event) => {
    const selectedValue = event.target.value;
    filterOnSelect(selectedValue)
  };

  return (
    <div id='menu' className="menu">
      <img className="banniere" src={bannerSRC} alt="banniere" />

      <div className="generation-filter-container">
        <label htmlFor="generation">
          <img className='clock' src={clock_img} alt="clock" />
        </label>
        <select name="generation" id="generation" onChange={ filterChanged }>
          <option value="none">Generation</option>
          <PokemonSelect />
        </select>
      </div>
    </div>
  );
}



