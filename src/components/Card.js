import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'
import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';
import { useContext } from 'react';
import {PokemonContext} from '../components/PokemonContext';







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

    // afficher les 
    pokemon_type.forEach(pokemonType => {
        typeList.forEach(element => {
            if (element['id'] === parseInt(pokemonType,10)) {
                pokemon_type_name.push(element['name'][language]);
                pokemon_type_url.push(element['image']);
                console.log(pokemon_type_name)
            }
        });
    });
   

    // console.log(type)

    return(
        <Tilt className="parallax-effect-glare-scale" scale={1.15} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
            <div className="card-container">
                <img className='fond-carte' src={fond_carte_squircle} alt="carte"/>

                <div className='infos-pokemon'>
                    <div className='number-pokemon'>{gen}</div>
                    <div className='name-pokemon'>{name}</div>
                    
                </div>
                <div className='img-pokemon-container'>
                    <img className='fond-blanc-carte' src={fond_image_pokemon} alt="fond-blanc"/>
                    <img className='img-pokemon-png' src={pokemon['image']} alt='png'/>
                </div>
                {pokemon_type.map((type, index) => (
                    <img className='type-image' src={pokemon_type_url[index]} alt="type"/>
                ))}
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




