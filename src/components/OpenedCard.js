import React, { useRef, useEffect } from 'react';
import '../css/opencard.css';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';
import int_to_hashtag from '../tools/int_to_hashtag'
import ApexCharts from 'apexcharts'; 
import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'



// images front 
import fond_card_1 from "../images/fond-card/fond-carte-squircle-1.svg";
import fond_card_2 from "../images/fond-card/fond-carte-squircle-2.svg";
import fond_card_3 from "../images/fond-card/fond-carte-squircle-3.svg";
import fond_card_4 from "../images/fond-card/fond-carte-squircle-4.svg";
import fond_card_5 from "../images/fond-card/fond-carte-squircle-5.svg";
import fond_card_6 from "../images/fond-card/fond-carte-squircle-6.svg";
import fond_card_7 from "../images/fond-card/fond-carte-squircle-7.svg";
import fond_card_8 from "../images/fond-card/fond-carte-squircle-8.svg";
import fond_card_9 from "../images/fond-card/fond-carte-squircle-9.svg";
import fond_card_10 from "../images/fond-card/fond-carte-squircle-10.svg";
import fond_card_11 from "../images/fond-card/fond-carte-squircle-11.svg";
import fond_card_12 from "../images/fond-card/fond-carte-squircle-12.svg";
import fond_card_13 from "../images/fond-card/fond-carte-squircle-13.svg";
import fond_card_14 from "../images/fond-card/fond-carte-squircle-14.svg";
import fond_card_15 from "../images/fond-card/fond-carte-squircle-15.svg";
import fond_card_16 from "../images/fond-card/fond-carte-squircle-16.svg";
import fond_card_17 from "../images/fond-card/fond-carte-squircle-17.svg";
import fond_card_18 from "../images/fond-card/fond-carte-squircle-18.svg";


// images mask 
import fond_card_mask_1 from "../images/fond-card-mask/fond-card-mask-1.svg";
import fond_card_mask_2 from "../images/fond-card-mask/fond-card-mask-2.svg";
import fond_card_mask_3 from "../images/fond-card-mask/fond-card-mask-3.svg";
import fond_card_mask_4 from "../images/fond-card-mask/fond-card-mask-4.svg";
import fond_card_mask_5 from "../images/fond-card-mask/fond-card-mask-5.svg";
import fond_card_mask_6 from "../images/fond-card-mask/fond-card-mask-6.svg";
import fond_card_mask_7 from "../images/fond-card-mask/fond-card-mask-7.svg";
import fond_card_mask_8 from "../images/fond-card-mask/fond-card-mask-8.svg";
import fond_card_mask_9 from "../images/fond-card-mask/fond-card-mask-9.svg";
import fond_card_mask_10 from "../images/fond-card-mask/fond-card-mask-10.svg";
import fond_card_mask_11 from "../images/fond-card-mask/fond-card-mask-11.svg";
import fond_card_mask_12 from "../images/fond-card-mask/fond-card-mask-12.svg";
import fond_card_mask_13 from "../images/fond-card-mask/fond-card-mask-13.svg";
import fond_card_mask_14 from "../images/fond-card-mask/fond-card-mask-14.svg";
import fond_card_mask_15 from "../images/fond-card-mask/fond-card-mask-15.svg";
import fond_card_mask_16 from "../images/fond-card-mask/fond-card-mask-16.svg";
import fond_card_mask_17 from "../images/fond-card-mask/fond-card-mask-17.svg";
import fond_card_mask_18 from "../images/fond-card-mask/fond-card-mask-18.svg";


// images back 
import back_card from "../images/back-card-squircle.svg";

export default function Opened_card(props) {
  const { onClose } = props;
  const pokemon = props.pokemon;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    Shiny(isChecked);
  };

  function Shiny(isChecked){
    if (isChecked == false){
      <img className='img-pokemon-png' src={pokemon['image']} alt='png' />
    } else {
        <img className='img-pokemon-png' src={pokemon['image_shiny']} alt='shiny_png' />
    }
  }

  useEffect(() => {
    const pokemon_atk = pokemon['stats']['atk'];
    const pokemon_atk_spe = pokemon['stats']['spe_atk'];
    const pokemon_pv = pokemon['stats']['hp'];
    const pokemon_def = pokemon['stats']['def'];
    const pokemon_def_spe = pokemon['stats']['spe_def'];
    const pokemon_speed = pokemon['stats']['vit'];

    const options = {
      series: [{
        data: [
          pokemon_atk,
          pokemon_atk_spe,
          pokemon_pv,
          pokemon_def,
          pokemon_def_spe,
          pokemon_speed
        ],
      }],
      chart: {
        height: 350,
        type: 'radar',
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      xaxis: {
        categories: [
          'Attaque : ' + pokemon_atk,
          'Attaque spéciale : ' + pokemon_atk_spe,
          'PV : ' + pokemon_pv,
          'Defense : ' + pokemon_def,
          'Defense spéciale : ' + pokemon_def_spe,
          'Vitesse : ' + pokemon_speed,
        ]
      },
      yaxis: {
        tickAmount: 8,
        labels: {
          formatter: function (val) {
            return ''
          }
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Assurez-vous de détruire le graphique lorsqu'il n'est plus nécessaire
    return () => {
      chart.destroy();
    };
  }, [pokemon]);

  return (
    <div>
      <div className="opencard">
        <button onClick={onClose}>Fermer la carte</button>
        <div className="bigcard">
          <div className="radar" id="chart"></div>
        </div>
        <label className="switch">
          <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div> 
  );
}
