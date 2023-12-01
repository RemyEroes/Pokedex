import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'
// import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';
import { useContext } from 'react';
import {PokemonContext} from '../components/PokemonContext';


// images
import fond_cart_1 from  "../images/fond-card/fond-carte-squircle-1.svg";
import fond_cart_2 from  "../images/fond-card/fond-carte-squircle-2.svg";
import fond_cart_3 from  "../images/fond-card/fond-carte-squircle-3.svg";
import fond_cart_4 from  "../images/fond-card/fond-carte-squircle-4.svg";
import fond_cart_5 from  "../images/fond-card/fond-carte-squircle-5.svg";
import fond_cart_6 from  "../images/fond-card/fond-carte-squircle-6.svg";
import fond_cart_7 from  "../images/fond-card/fond-carte-squircle-7.svg";
import fond_cart_8 from  "../images/fond-card/fond-carte-squircle-8.svg";
import fond_cart_9 from  "../images/fond-card/fond-carte-squircle-9.svg";
import fond_cart_10 from  "../images/fond-card/fond-carte-squircle-10.svg";
import fond_cart_11 from  "../images/fond-card/fond-carte-squircle-11.svg";
import fond_cart_12 from  "../images/fond-card/fond-carte-squircle-12.svg";
import fond_cart_13 from  "../images/fond-card/fond-carte-squircle-13.svg";
import fond_cart_14 from  "../images/fond-card/fond-carte-squircle-14.svg";
import fond_cart_15 from  "../images/fond-card/fond-carte-squircle-15.svg";
import fond_cart_16 from  "../images/fond-card/fond-carte-squircle-16.svg";
import fond_cart_17 from  "../images/fond-card/fond-carte-squircle-17.svg";
import fond_cart_18 from  "../images/fond-card/fond-carte-squircle-18.svg";






export default function Card(props){

    const {typeList} = useContext(PokemonContext)
    var {language, pokemon} = props
    // console.log(name)
    // language.toUpperCase()
    var name = pokemon['name'][language].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    var gen = int_to_hashtag(pokemon['id'])
    
    var pokemon_type = pokemon['types']
    
    var pokemon_type_name = []
    var pokemon_type_url = []

    // images
    const fondCartImages = [
        fond_cart_1,
        fond_cart_2,
        fond_cart_3,
        fond_cart_4,
        fond_cart_5,
        fond_cart_6,
        fond_cart_7,
        fond_cart_8,
        fond_cart_9,
        fond_cart_10,
        fond_cart_11,
        fond_cart_12,
        fond_cart_13,
        fond_cart_14,
        fond_cart_15,
        fond_cart_16,
        fond_cart_17,
        fond_cart_18,
    ];
    // uniquement le 1er
    const fond_cart_svg = fondCartImages[pokemon_type[0] - 1];



    // afficher les 
    pokemon_type.forEach(pokemonType => {
        typeList.forEach(element => {
            if (element['id'] === parseInt(pokemonType,10)) {
                pokemon_type_name.push(element['name'][language]);
                pokemon_type_url.push(element['image']);
                // console.log(pokemon_type_name)
            }
        });
    });
   

    // console.log(type)

    return(
        <Tilt className="parallax-effect-glare-scale" scale={1.15} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
            <div className="card-container">
                <img className='fond-carte' src={fond_cart_svg} alt="carte"/>

                <div className='infos-pokemon'>
                    <div className='number-pokemon'>{gen}</div>
                    <div className='name-pokemon'>{name}</div>
                    
                </div>
                <div className='img-pokemon-container'>
                    <img className='fond-blanc-carte' src={fond_image_pokemon} alt="fond-blanc"/>
                    <img className='img-pokemon-png' src={pokemon['image']} alt='png'/>
                </div>

                <div className='type-pokemon-container'>
                {pokemon_type.map((type, index) => (
                    <img className='type-image' src={pokemon_type_url[index]} alt="type"/>
                ))}
                </div>
                <div className='type-pokemon'>{pokemon_type_name}</div>
            </div>
        </Tilt>
    )
    // <div className='type-pokemon'>{pokemon_type_name}</div>
}



function int_to_hashtag(int) {
    var tostring = int.toString();
    var finalstring;

    if (tostring.length === 3) {
        finalstring = "#0" + int;
    } else if (tostring.length === 2) {
        finalstring = "#00" + int;
    } else if (tostring.length === 1) {
        finalstring = "#000" + int;
    } else {
        finalstring = "#" + int;
    }

    return finalstring;
}




