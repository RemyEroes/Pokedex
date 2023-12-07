import React, { useContext, useEffect, useState } from 'react';
import '../css/menu.css';
import { FilterContext, GenFilterSelect } from '../contexts/FilterContext';
import TypeFilterSelect from '../tools/typeFilterSelect';
import get_banner_from_width from '../tools/get_banner_from_width';
import $ from 'jquery'



// clock
import clock_img from '../images/assets/clock.svg'
// type
import type_img from '../images/assets/type.svg'


export default function Menu() {
  const {  genFilterOnSelect, typeFilterOnSelect  } = useContext(FilterContext);

  // banner from width
  const [windowWidth] = useState(window.innerWidth);
  const [bannerSRC, setBannerSRC] = useState('');

  const menu_element = $('.menu');
  const banner_element = $('.banniere');


  // banner
  useEffect(()=>{
    // banner
    setBannerSRC(get_banner_from_width());

    // menu height
    var height = banner_element.height()+'px'
    menu_element.css('height',height)

  },[windowWidth, banner_element, menu_element])


  // gen filter
  const genFilterChanged = (event) => {
    const selectedValue = event.target.value;
    genFilterOnSelect(selectedValue)
  };

  // type filter
  const typeFilterChanged = (event) => {
    const selectedValue = event.target.value;
    typeFilterOnSelect(selectedValue)
  };
  


  return (
    <div id='menu' className="menu">
      <img className="banniere" src={bannerSRC} alt="banniere" />

      
      <div className="generation-filter-container">
        <label htmlFor="generation">
          <img className='clock' src={clock_img} alt="clock" />
        </label>
        <select name="generation" id="generation" onChange={ genFilterChanged }>
          <option value="none">Toutes generations</option>
          <GenFilterSelect />
        </select>
      </div>

      <div className="type-filter-container">
        <label htmlFor="type">
          <img className='type-img' src={type_img} alt="type" />
        </label>
        <select name="type" id="type" onChange={ typeFilterChanged }>
          <option value="none">Tous Types</option>
          <TypeFilterSelect />
        </select>
      </div>

    </div>
  );
}



