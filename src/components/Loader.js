import React, { useContext, useEffect ,useRef} from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import '../css/loader.css';
import pokeball_img from '../images/pokeball.svg'
import $ from 'jquery';


export default function Loader() {

  const { isLoading } = useContext(PokemonContext);

  const loader = useRef(null);
  useEffect(() => {
    if (isLoading === false) {
      var loader_element = loader.current;
      $(loader_element).css('animation', 'loader_desappear 2s ease-in-out');
      setTimeout(() => {
        $(loader_element).css('display', 'none');
      }, 2000);
    }
  }, [isLoading]);

  return (
    <div ref={loader} className="loader-div">
      <div className="loader-text">
        <p>Loading . . .</p>
      </div>
      <img className="pokeball-img" src={pokeball_img} alt="pokeball" />
    </div>
  );
};

