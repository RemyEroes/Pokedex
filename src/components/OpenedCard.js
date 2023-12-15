import React, { useRef, useState } from 'react';
import '../css/opencard.css'
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';
import int_to_hashtag from '../tools/int_to_hashtag'
import ApexCharts from 'apexcharts'; 

export default function Opened_card(props) {

    const { typeList } = useContext(PokemonContext)
    const pokemon = props.pokemon;

    console.log(pokemon['id'])

    function handleCardClose() {
    props.onClose();
    }
  
    return (
      <div>
        <div class="opencard">
            {pokemon['name']['fr']}
        </div>
        <button onClick={handleCardClose}>Fermer la carte</button>
      </div>
    );
  }

  
  // var { language, pokemon } = props
  // var pokemon_type = pokemon['types']
  // var pokemon_type_name = []
  // var pokemon_type_url = []
  // var pokemon_atk = pokemon['stats']['atk']
  // var pokemon_atk_spe = pokemon['stats']['spe_atk']
  // var pokemon_def = pokemon['stats']['def']
  // var pokemon_def_spe = pokemon['stats']['spe_def']
  // var pokemon_pv = pokemon['stats']['hp']
  // var pokemon_speed = pokemon['stats']['vit']
  // var pokemon_height = pokemon['height']
  // var pokemon_weight = pokemon['weight']

  // var options = {
  //     series: [{
  //     data: [
  //         pokemon_atk, 
  //         pokemon_atk_spe, 
  //         pokemon_pv, 
  //         pokemon_def, 
  //         pokemon_def_spe, 
  //         pokemon_speed, 
  //         pokemon_height, 
  //         pokemon_weight
  //     ],
  //     }],
  //     chart: {
  //     height: 350,
  //     type: 'radar',
  //     },
  //     //   dataLabels: {
  //     //     enabled: true
  //     //   },
  //     plotOptions: {
  //     radar: {
  //         size: 140,
  //         polygons: {
  //         strokeColors: '#e9e9e9',
  //         fill: {
  //             colors: ['#f8f8f8', '#fff']
  //         }
  //         }
  //     }
  //     },
  //     title: {
  //     text: 'Radar with Polygon Fill'
  //     },
  //     colors: ['#FF4560'],
  //     markers: {
  //     size: 4,
  //     colors: ['#fff'],
  //     strokeColor: '#FF4560',
  //     strokeWidth: 2,
  //     },
  //     tooltip: {
  //     y: {
  //         formatter: function(val) {
  //         return val
  //         }
  //     }
  //     },
  //     xaxis: {
  //     categories: [
  //         'Attaque : ' + pokemon_atk, 
  //         'Attaque spéciale : ' + pokemon_atk_spe, 
  //         'PV : ' + pokemon_pv, 
  //         'Defense : ' + pokemon_def, 
  //         'Defense spéciale : ' + pokemon_def_spe, 
  //         'Vitesse : ' + pokemon_speed, 
  //         'Taille : ' + pokemon_height, 
  //         'Poids : ' + pokemon_weight
  //     ]
  //     },
  //     yaxis: {
  //     tickAmount: 8,
  //     labels: {
  //         formatter: function(val) {
  //         return ''
  //         }
  //     }
  //     }
  //     };
  
  // var chart = new ApexCharts(document.querySelector("#chart"), options);
  // chart.render();