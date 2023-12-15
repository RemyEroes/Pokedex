import React, { useRef, useState } from 'react';
import '../css/card.css'
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import $ from 'jquery';
import int_to_hashtag from '../tools/int_to_hashtag'


function Radar(){
    var options = {
        series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33, 45],
        }],
        chart: {
        height: 350,
        type: 'radar',
        },
        //   dataLabels: {
        //     enabled: true
        //   },
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
        title: {
        text: 'Radar with Polygon Fill'
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
            formatter: function(val) {
            return val
            }
        }
        },
        xaxis: {
        categories: ['Attaque : ', 'Attaque spéciale : ', 'PV : ', 'Defense : ', 'Defense spéciale : ', 'Vitesse : ', 'Taille : ', 'Poids : ']
        },
        yaxis: {
        tickAmount: 8,
        labels: {
            formatter: function(val, i) {
            return ''
            }
        }
        }
        };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

