import React, { useRef, useState } from 'react';
import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'
// import FaceCard from './FaceCard';
// import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';
import int_to_hashtag from '../tools/int_to_hashtag'



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




export default function Card(props) {

    const { typeList } = useContext(PokemonContext)
    var { language, pokemon } = props
    // console.log(name)
    // language.toUpperCase()
    var name = pokemon['name'][language].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    var pk_number = int_to_hashtag(pokemon['id'])

    var pokemon_type = pokemon['types']

    var pokemon_type_name = []
    var pokemon_type_url = []

    // images 
    const fondCardImages = [
        fond_card_1,
        fond_card_2,
        fond_card_3,
        fond_card_4,
        fond_card_5,
        fond_card_6,
        fond_card_7,
        fond_card_8,
        fond_card_9,
        fond_card_10,
        fond_card_11,
        fond_card_12,
        fond_card_13,
        fond_card_14,
        fond_card_15,
        fond_card_16,
        fond_card_17,
        fond_card_18,
    ];
    // uniquement le 1er
    const fond_card_svg = fondCardImages[pokemon_type[0] - 1];

    const fondCardImagesMask = [
        fond_card_mask_1,
        fond_card_mask_2,
        fond_card_mask_3,
        fond_card_mask_4,
        fond_card_mask_5,
        fond_card_mask_6,
        fond_card_mask_7,
        fond_card_mask_8,
        fond_card_mask_9,
        fond_card_mask_10,
        fond_card_mask_11,
        fond_card_mask_12,
        fond_card_mask_13,
        fond_card_mask_14,
        fond_card_mask_15,
        fond_card_mask_16,
        fond_card_mask_17,
        fond_card_mask_18,
    ];
    // uniquement le 1er




    // afficher les 
    pokemon_type.forEach(pokemonType => {
        typeList.forEach(element => {
            if (element['id'] === parseInt(pokemonType, 10)) {
                pokemon_type_name.push(element['name'][language]);
                pokemon_type_url.push(element['image']);
                // console.log(pokemon_type_name)
            }
        });
    });


    // const [cardState, setCardState] = useState('front');

    const [tiltProps, setTiltProps] = useState({
        scale: 1.15,
        glareEnable: true,
        glareMaxOpacity: 0.8,
        glareColor: "#ffffff",
        glarePosition: "bottom",
        glareBorderRadius: "20px",
        trackOnWindow: false,
    });

    const little_front = useRef(null)
    const back_ = useRef(null)
    const big_front = useRef(null)
    const card_element = useRef(null)
    const paralax_element = useRef(null)
    // const paralax_element_2 = useRef(null)
    const big_front_container_element = useRef(null)


    // open card
    const { openingCardValueFunction, openCardValueFunction } = useContext(OpenCardContext);


    function openCard() {
        openingCardValueFunction()
        // elements
        const littleFrontElement = little_front.current;
        const backElement = back_.current;
        const bigFrontElement = big_front.current;
        const CARDElement = card_element.current;
        const big_front_container = big_front_container_element.current
        // const ParalaxElement = paralax_element.current;


        if (littleFrontElement && backElement) {
            // Appliquer les transformations en fonction de l'état actuel de la carte
            $(CARDElement).css('z-index', '100');
            $(CARDElement).css('position', 'fixed');
            $(CARDElement).css('top', '50%');
            $(CARDElement).css('left', '50%');
            $(CARDElement).css('transform', 'translate(-50%, -50%) scale(3)');

            $(big_front_container).css('display', 'initial');


            $(littleFrontElement).css('transform', ' rotateY(180deg)');
            setInterval(() => {
                $(backElement).css('transform', ' rotateY(540deg)')
            }, 200);
            setInterval(() => {
                $(bigFrontElement).css('transform', 'rotateY(360deg)');
            }, 650);

            // open
            openCardValueFunction()
        }

    }


    function closeCard(){
        // console.log('close')
        // const littleFrontElement = little_front.current;
        // const backElement = back_.current;
        // const bigFrontElement = big_front.current;
        const CARDElement = card_element.current;
        const big_front_container = big_front_container_element.current
        // const ParalaxElement = paralax_element.current;
        $(CARDElement).css('opacity', '0.3');
        // if (openCardValue === 'closing') {

        //         // Appliquer les transformations en fonction de l'état actuel de la carte
        //         // $(CARDElement).css('z-index', '100');
        //         $('pokemon1').css('opacity', '0.3');
               
        //         closeCardValueFunction()

        // }
    }




    function render_BG_Images() {
        const pokemon_type_length = pokemon_type.length;

        if (pokemon_type_length === 2) {
            const fond_card_mask_svg = fondCardImagesMask[pokemon_type[1] - 1];
            return (
                <>
                    <img className='fond-carte' src={fond_card_svg} alt="carte" />
                    <img className='fond-carte-test' src={fond_card_mask_svg} alt="carte" />
                </>
            );
        } else {
            return (
                <img className='fond-carte' src={fond_card_svg} alt="carte" />
            );
        }
    }


    // generation
    var pokemon_generation_little = "GENERATION " + pokemon['generation']
    var pokemon_generation_big = "GEN " + pokemon['generation']

    return (
        <div ref={card_element} id={'pokemon'+pokemon['id']} className='card_wraper'>
            <Tilt ref={paralax_element} className="parallax-effect-glare-scale" {...tiltProps}>

                <button className="card-container" onClick={openCard}>

                    <div ref={little_front} className='front-card-little'>
                        {render_BG_Images()}
                        <div className='infos-pokemon'>
                            <div className='number-pokemon'>{pk_number}</div>
                            <div className='name-pokemon'>{name}</div>

                        </div>
                        <div className='img-pokemon-container'>
                            <img className='fond-blanc-carte' src={fond_image_pokemon} alt="fond-blanc" />
                            <img className='img-pokemon-png' src={pokemon['image']} alt='png' />
                        </div>

                        <div className='type-pokemon-container'>
                            {pokemon_type.map((type, index) => (
                                <img key={type} className='type-image' src={pokemon_type_url[index]} alt="type" />
                            ))}
                        </div>
                        <div className='gen-pokemon'>{pokemon_generation_little}</div>
                    </div>

                    <div ref={back_} className='back-card'>
                        <img className='back-card-img' src={back_card} alt="back-card-pokemon" />
                    </div>



                    <div ref={big_front} className='big-front-card'>
                        {render_BG_Images()}
                        <div className='infos-pokemon-big'>
                            <div className='numeros-container-big'>
                                <div className='number-pokemon-big'>{pk_number}</div>
                                <div className='gen-pokemon-big'>{pokemon_generation_big}</div>
                            </div>
                            <div className='name-pokemon-big'>{name}</div>
                        </div>
                        <div className='img-pokemon-container'>
                            <img className='fond-blanc-carte-big' src={fond_image_pokemon} alt="fond-blanc" />
                            <img className='img-pokemon-png-big' src={pokemon['image']} alt='png' />
                        </div>

                        <div className='type-pokemon-container-big'>
                            {pokemon_type.map((type, index) => (
                                <img key={type} className='type-image-big' src={pokemon_type_url[index]} alt="type" />
                            ))}
                        </div>


                    </div>
                </button>
            </Tilt>
        </div>
        

    )

}
 // <CloseButton onClick={() => closeCard()} />





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
