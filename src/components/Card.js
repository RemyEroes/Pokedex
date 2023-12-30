import React, { useRef, useState, useEffect } from 'react';
import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'
// import FaceCard from './FaceCard';
// import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import OpenedCard from './OpenedCard';
import $ from 'jquery';
import int_to_hashtag from '../tools/int_to_hashtag'
import { useTranslation } from 'react-i18next';
import pokemons_translated from '../data/pokemon_names_new.json';


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
import translateNames from '../tools/translateNames';
import { use } from 'i18next';




export default function Card(props) {

    const { typeList } = useContext(PokemonContext)
    const [isCardOpen, setIsCardOpen] = useState(false);
    var pokemon = props.pokemon
    const { t } = useTranslation();
    var language = useTranslation().i18n.language;

    var name = translateNames(pokemon, language)

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
    const card_element = useRef(null)
    const paralax_element = useRef(null)







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
    var pokemon_generation_little = t("GENERATION") + " " + pokemon['generation']


    function openCard() {
        setIsCardOpen(true);
        page_scroll('disable')
    }

    function tocloseCard() {
        setIsCardOpen(false);
        page_scroll('enable')
    }


    function page_scroll(value) {
        if (value === 'enable') {
            $('body').css('overflow', 'scroll');
        } else if (value === 'disable') {
            $('body').css('overflow', 'hidden');
        }
    }

    
    useEffect(() => {
        const namePokemonElements = document.getElementsByClassName('name-pokemon');
    
        if (language === 'zh' || language === 'ja') {
            for (const element of namePokemonElements) {
                element.classList.add('bold');
            }
        } else if (language === 'en' || language === 'fr') {
            for (const element of namePokemonElements) {
                element.classList.remove('bold');
            }
        }
    }, [language]);



    return (
        <div ref={card_element} id={'pokemon' + pokemon['id']} className='card_wraper'>
            {isCardOpen ?
                (< OpenedCard
                    onClose={tocloseCard}
                    pokemon={pokemon} />
                ) : (
                    <button className="card-container" onClick={openCard}>
                        {
                            <Tilt ref={paralax_element} className="parallax-effect-glare-scale" {...tiltProps}>
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

                            </Tilt>}
                    </button>
                )}

        </div>


    )

}


