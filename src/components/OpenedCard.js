import React, { useEffect, useState, useContext, useRef } from 'react';
import '../css/opencard.css';
import { PokemonContext } from '../contexts/PokemonContext';
import ApexCharts from 'apexcharts';
import Tilt from 'react-parallax-tilt';
import fond_image_pokemon from '../images/fond-image-pokemon.svg';
import int_to_hashtag from '../tools/int_to_hashtag';
// import CloseButton from './CloseButton';
import $ from 'jquery';

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
// close img
import close_img from '../images/assets/close.svg'

import height_img from '../images/assets/height.svg';
import weight_img from '../images/assets/weight.svg';


export default function OpenedCard(props) {
    const { onClose } = props;
    const pokemon = props.pokemon;
    const [isChecked, setIsChecked] = useState(false);
    const { typeList } = useContext(PokemonContext);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const renderPokemonImage = () => {
        return (
            <img
                className='img-pokemon-png-big'
                src={isChecked ? pokemon['image_shiny'] : pokemon['image']}
                alt={isChecked ? 'shiny_png' : 'png'}
            />
        );
    };

    var language = 'fr';
    var pokemon_type = pokemon['types'];
    var pokemon_type_name_ = [];
    var pokemon_type_url_ = [];
    var pokemon_num = int_to_hashtag(pokemon['id']);
    var pokemon_name = pokemon['name'][language];
    var pokemon_generation = "GEN " + pokemon['generation']

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

    const chartContainerRef = useRef();
    const chartRef = useRef(null);

    useEffect(() => {
        const pokemon_atk = pokemon['stats']['atk'];
        const pokemon_atk_spe = pokemon['stats']['spe_atk'];
        const pokemon_pv = pokemon['stats']['hp'];
        const pokemon_def = pokemon['stats']['def'];
        const pokemon_def_spe = pokemon['stats']['spe_def'];
        const pokemon_speed = pokemon['stats']['vit'];

        const chart_height = chartContainerRef.current.clientHeight;
        const chart_width = $('.stats-chart-container').width();

        console.log(pokemon_type)
        var color1 = '#a5df98';
        var color2 = '#f8f8f8';

        if (pokemon_type.length === 2) {
            color1 = type_id_to_color(pokemon_type[0]);
            color2 = type_id_to_color(pokemon_type[1]);
        } else {
            color1 = type_id_to_color(pokemon_type[0]);
        }

        const options = {

            series: [{
                data: [
                    pokemon_pv,
                    pokemon_atk,
                    pokemon_atk_spe,
                    pokemon_speed,
                    pokemon_def_spe,
                    pokemon_def
                ],
            }],
            chart: {
                height: chart_height,

                type: 'radar',
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors: '#f8f8f8',
                        fill: {
                            colors: [color2, color1]
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
                    'PV : ' + pokemon_pv,
                    'Attaque : ' + pokemon_atk,
                    'Attaque spéciale : ' + pokemon_atk_spe,
                    'Vitesse : ' + pokemon_speed,
                    'Defense spéciale : ' + pokemon_def_spe,
                    'Defense : ' + pokemon_def,
                ],
                labels: {
                    show: true,
                    style: {
                        colors: ["#000000"],
                        fontSize: "12px",
                        fontFamily: 'Outfit'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                labels: {
                    show: false,
                }
            }
        };




        setTimeout(() => {
            // Sélectionnez l'élément du graphique
            const chartElement = document.querySelector("#chart");

            // Vérifiez si un graphique existe déjà et détruisez-le
            if (chartElement._chart) {
                chartElement._chart.destroy();
            }

            // Créez un nouveau graphique
            const chart = new ApexCharts(chartElement, options);
            chart.render();

            // Mise à jour du graphique dans l'élément du DOM
            chartElement._chart = chart;

        }, 50);

    }, [pokemon, pokemon_type]);



    pokemon_type.forEach(pokemonType => {
        typeList.forEach(element => {
            if (element['id'] === parseInt(pokemonType, 10)) {
                pokemon_type_name_.push(element['name'][language]);
                pokemon_type_url_.push(element['image']);
            }
        });
    });

    // const tiltProps = {
    //     gyroscope:true,
    //     tiltMaxAngleX:45,
    //     tiltMaxAngleY:45
       
    // };
    const tiltProps = {};

    function render_BG_Images() {
        const pokemon_type_length = pokemon_type.length;

        if (pokemon_type_length === 2) {
            const fond_card_mask_svg = fondCardImagesMask[pokemon_type[1] - 1];
            return (
                <>
                    <img className='front-card-big' src={fond_card_svg} alt="carte" />
                    <img className='front-card-big' src={fond_card_mask_svg} alt="carte" />
                </>
            );
        } else {
            return (
                <img className='front-card-big' src={fond_card_svg} alt="carte" />
            );
        }
    }

    function render_Type_Images() {
        if (pokemon_type_url_.length === 2) {
            const Images = pokemon_type_url_.map((type, index) => (
                <div key={index} className='type-container-big double'>
                    <img className='type-image-big' src={type} alt={`type-${index}`} />
                </div>
            ));
            return Images;
        } else {
            const Image = pokemon_type_url_.map((type, index) => (
                <div key={index} className='type-container-big simple'>
                    <img className='type-image-big' src={type} alt={`type-${index}`} />
                </div>
            ));
            return Image;
        }

    }

    function print_height() {
        if (language === 'fr') {
            return (
                <div className='height-container'>
                    <img className='height-img' src={height_img} alt='height' />
                    <div className='height-value'>{pokemon['height']} m</div>
                </div>
            )
        } else if (language === 'en') {
            return (
                <div className='height-container'>
                    <img className='height-img' src={height_img} alt='height' />
                    <div className='height-value'>{meters_to_feet(pokemon['height'])} ft</div>
                </div>
            )
        }
    }

    function print_weight() {
        if (language === 'fr') {
            return (
                <div className='weight-container'>
                    <img className='weight-img' src={weight_img} alt='weight' />
                    <div className='weight-value'>{pokemon['weight']} kg</div>
                </div>
            )
        } else if (language === 'en') {
            return (
                <div className='weight-container'>
                    <img className='weight-img' src={weight_img} alt='weight' />
                    <div className='weight-value'>{kgs_to_lbs(pokemon['weight'])} lbs</div>
                </div>
            )
        }
    }

    function kgs_to_lbs(kgs) {
        return (kgs * 2.20462).toFixed(1);
    }
    function meters_to_feet(meters) {
        return (meters * 3.28084).toFixed(1);
    }

    function type_id_to_color(id) {
        const colors = ['#A2D0E0', '#FFD3A7', '#B0B9FF', '#98C5FF', '#FFEBA7', '#FCC0FC', '#FFA6A7', '#C3F3FF', "#CCD77C", "#DDDDDD", "#A4DF97", "#DEB3FF", "#FDBDD1", "#DBD7BC", "#D2AB8D", "#D7A0D7", "#A4918E", "#CADFF2"]
        return colors[id - 1];
    }



    return (
        <>
            <div className='test' onClick={onClose} >
                <div className='card_wraper-big'>
                    <Tilt className="parallax-effect-glare-scale" {...tiltProps}>
                        <div className="card-container-big">

                            <div className='back-card-big'>
                                <img className='back-card-img' src={back_card} alt="back-card-pokemon" />
                            </div>

                            <div className='front-card-big-container'>
                                {render_BG_Images()}
                                <div className='infos-pokemon-container'>
                                    <div className='top-infos-container'>
                                        <div className='number-pokemon-big'>{pokemon_num}</div>
                                        <div className='gen-pokemon-big'>{pokemon_generation}</div>
                                    </div>
                                    <div className='name-pokemon-big'>{pokemon_name}</div>
                                </div>

                                <div className='img-pokemon-container-big'>
                                    <div className='type-images-container'>
                                        {render_Type_Images()}
                                    </div>
                                    <div className='pokemon-images-container'>
                                        <img className='fond-blanc-carte-big' src={fond_image_pokemon} alt="fond-blanc" />
                                        {renderPokemonImage()}
                                    </div>
                                </div>

                                <div className='stats-container'>
                                    <div className='stats-title'>STATS</div>
                                    <div className='stats-chart-container' ref={chartContainerRef}>
                                        <div id="chart" ref={chartRef}></div>
                                    </div>
                                </div>

                                <div className='bottom-infos-container'>
                                    {print_height()}
                                    {print_weight()}
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
                    </Tilt>
                </div>
            </div>
            <button className='close-button' style={{ position: 'fixed' }} onClick={onClose}>
                <img className="close-img" src={close_img} alt="close" />
            </button>
        </>
    );
}

// <img className='img-pokemon-png-big' src={pokemon['image']} alt='png' />