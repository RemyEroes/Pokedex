import '../css/card.css'
import fond_image_pokemon from '../images/fond-image-pokemon.svg'
import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';






export default function Card(props){

    var {language, pokemon} = props
    // console.log(name)
    // language.toUpperCase()
    var name = pokemon['name'][language].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()

    return(
        <Tilt className="parallax-effect-glare-scale" scale={1.15} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
            <div className="card-container">
                <img className='fond-carte' src={fond_carte_squircle} alt="carte"/>
            
                <div className='infos-pokemon'>
                    {name}
                </div>
                <div className='img-pokemon-container'>
                    <img className='fond-blanc-carte' src={fond_image_pokemon} alt="fond-blanc"/>
                    <img className='img-pokemon-png' src={pokemon['image']} alt='png'/>
                </div>
            </div>
            
        </Tilt>
    )
}

// export default function Card(){


//     return(
//         <Tilt className="parallax-effect" perspective={500} scale={1.15} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
//             <div className="card-container">
//                 <img className='fond-carte' src={fond_carte_squircle} alt="carte"/>
            
//                 <div className='infos-pokemon'>
//                     pokemon
//                 </div>
//                 <div className='img-pokemon-container'>
//                     <img className='fond-blanc-carte' src={fond_image_pokemon} alt="fond-blanc"/>
//                     <img className='img-pokemon-png' src='https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/625/regular.png' alt='png'/>
//                 </div>
//             </div>
            
//         </Tilt>
//     )
// }


function int_to_hashtag(int) {
    var tostring = int.toString();
    var finalstring;

    if (tostring.length == 3) {
        finalstring = "#0" + int;
    } else if (tostring.length == 2) {
        finalstring = "#00" + int;
    } else if (tostring.length == 1) {
        finalstring = "#000" + int;
    } else {
        finalstring = "#" + int;
    }

    console.log(finalstring);
}

int_to_hashtag(1);
