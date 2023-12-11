import React, { useContext, useEffect, useState } from 'react';
import '../css/menu.css';
import { FilterContext, GenFilterSelect } from '../contexts/FilterContext';
import { SortContext } from '../contexts/SortContext';
import SortSelect from './SortSelect';
import TypeFilterSelect from '../tools/typeFilterSelect';
import get_banner_from_width from '../tools/get_banner_from_width';
import $ from 'jquery'
import { SearchContext } from '../contexts/SearchContext';


// search
import search_img from '../images/assets/search.svg'
// clock
import clock_img from '../images/assets/clock.svg'
// type
import type_img from '../images/assets/type.svg'
// sort
import sort_img from '../images/assets/tri.svg'

export default function Menu() {
  const {  genFilterOnSelect, typeFilterOnSelect  } = useContext(FilterContext);
  const {  sortOnSelect  } = useContext(SortContext);
  const {searchOnChange } = useContext(SearchContext)

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

  // sort 
  const sortChanged = (event) => {
    const selectedValue = event.target.value;
    sortOnSelect(selectedValue)
  };

  // research
  const searchValueChanged = (event) => {
    const selectedValue = event.target.value;
    searchOnChange(selectedValue)
  };
  


  return (
    <div id='menu' className="menu">
      <img className="banniere" src={bannerSRC} alt="banniere" />

      <div className="search-bar-container">
        <label htmlFor="search-bar">
          <img className='search' src={search_img} alt="search" />
        </label>
        <input type="text" name="search-bar" id="search-bar" placeholder="Rechercher . . ." onChange={ searchValueChanged }></input>
      </div>
      

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

      <div className="sort-container">
        <label htmlFor="sort">
          <img className='sort-img' src={sort_img} alt="sort" />
        </label>
        <select name="sort" id="sort" onChange={ sortChanged }>
          <option value="none">Trier</option>
          <SortSelect />
        </select>
      </div>

    </div>
  );
}



