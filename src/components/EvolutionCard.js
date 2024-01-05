import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PokemonContext } from '../contexts/PokemonContext';
import '../css/evolutionCard.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg';
import Tilt from 'react-parallax-tilt';
import translateNames from '../tools/translateNames';

import int_to_hashtag from '../tools/int_to_hashtag';
import $ from 'jquery';


// images front
import fond_card_1 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-1.svg";
import fond_card_3 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-3.svg";
import fond_card_2 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-2.svg";
import fond_card_4 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-4.svg";
import fond_card_5 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-5.svg";
import fond_card_6 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-6.svg";
import fond_card_7 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-7.svg";
import fond_card_8 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-8.svg";
import fond_card_9 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-9.svg";
import fond_card_10 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-10.svg";
import fond_card_11 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-11.svg";
import fond_card_12 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-12.svg";
import fond_card_13 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-13.svg";
import fond_card_14 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-14.svg";
import fond_card_15 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-15.svg";
import fond_card_16 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-16.svg";
import fond_card_17 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-17.svg";
import fond_card_18 from "../images/fond-card-horizontal/fond-horizontal-card-squircle-18.svg";



// images mask
import fond_card_mask_1 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-1.svg";
import fond_card_mask_2 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-2.svg";
import fond_card_mask_3 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-3.svg";
import fond_card_mask_4 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-4.svg";
import fond_card_mask_5 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-5.svg";
import fond_card_mask_6 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-6.svg";
import fond_card_mask_7 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-7.svg";
import fond_card_mask_8 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-8.svg";
import fond_card_mask_9 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-9.svg";
import fond_card_mask_10 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-10.svg";
import fond_card_mask_11 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-11.svg";
import fond_card_mask_12 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-12.svg";
import fond_card_mask_13 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-13.svg";
import fond_card_mask_14 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-14.svg";
import fond_card_mask_15 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-15.svg";
import fond_card_mask_16 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-16.svg";
import fond_card_mask_17 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-17.svg";
import fond_card_mask_18 from "../images/fond-card-horizontal-mask/fond-horizontal-card-squircle-mask-18.svg";



export default function EvolutionCard(props) {

    var pokemon_id = props.pokemonId;
    const { pokemonList } = useContext(PokemonContext)
    const [pokemonData, setPokemonData] = useState(null);
    const [windowWidth] = useState(window.innerWidth);
    const [pokemon_name , setPokemonName] = useState('Loading...');
    var evolve_condition = props.condition;
    const isChecked = props.isChecked

    const { t, i18n } = useTranslation();
    var language = i18n.language;


    useEffect(() => {
        function getPokemonById(id) {
            pokemonList.forEach(pokemon => {
                if (pokemon['id'] === parseInt(id, 10)) {
                    setPokemonData(pokemon);

                }
            });
        }

        getPokemonById(pokemon_id);

    }, [pokemonList, pokemon_id]);



    useEffect(() => {
        var card_width = $('.preevolution-card-container').width();
        var card_height = $('.preevolution-card-container').height();
        $('.pokemon-preevolution-fond').css('width', card_width + 'px')
        $('.pokemon-preevolution-fond').css('height', card_height + 'px')
    }, [windowWidth]);


    const pokemon = pokemonData;
    
    useEffect(() => {
        if (pokemonData){
            setPokemonName(translateNames(pokemonData, language))
        }
    }, [pokemonData, language]);


    const pokemon_number = int_to_hashtag(pokemon_id);
    const pokemon_types = pokemon?.['types'] ?? t('chargement')+'...';



    const evolutionCardClick = props.onEvClick;

    const tiltProps = {
        scale: 1.1,
        // trackOnWindow:true
    };
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

    const fond_card_svg = fondCardImages[pokemon_types[0] - 1];

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

    function render_BG_Images() {
        const pokemon_type_length = pokemon_types.length;

        if (pokemon_type_length === 2) {
            const fond_card_mask_svg = fondCardImagesMask[pokemon_types[1] - 1];
            return (
                <>
                    <img className='front-card-evol' src={fond_card_svg} alt="carte" />
                    <img className='front-card-evol' src={fond_card_mask_svg} alt="carte" />
                </>
            );
        } else {
            return (
                <img className='front-card-evol' src={fond_card_svg} alt="carte" />
            );
        }
    }

    const renderPokemonImage = () => {
        return (
            <img
                className='pokemon-preevolution-img'
                src={isChecked ? pokemon?.['image_shiny'] : pokemon?.['image']}
                alt={'pokemon'}
            />
        );
    };


   

    return (
        <div className='pokemon-preevolution-container' >
            <Tilt className="parallax-effect-glare-scale" {...tiltProps}>
                <button className='preevolution-card-container' onClick={() => evolutionCardClick(pokemon)}  >
                    <div className='pokemon-preevolution-fond '>{render_BG_Images()}</div>
                    <div className='pokemon-preevolution-number'>{pokemon_number}</div>
                    <div className='pokemon-preevolution-name'>{pokemon_name}</div>
                    <div className='pokemon-preevolution-images'>
                        <img className='pokemon-preevolution-fond-img' src={fond_image_pokemon} alt="fond" />
                        {renderPokemonImage()}
                    </div>
                    <div className='pokemon-preevolution-condition'>{t('condition')}: {evolve_condition}</div>
                </button>
            </Tilt>
        </div>

    );
};

