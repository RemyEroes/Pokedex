import { useContext, useRef, useEffect } from 'react';
import '../css/home.css'
// import GlareCard from '../components/Card'
import Card from '../components/Card'
import {PokemonContext} from '../components/PokemonContext';
import { OpenCardContext } from '../contexts/OpenCardContext';
import $ from 'jquery';



export default function Home() {

    const { pokemonList } = useContext(PokemonContext)

    const { openCardValue , closeCardfunction} = useContext(OpenCardContext);

    useEffect(() => {
        if (openCardValue === 'open'){
            backgroundBlur('on')
            console.log('on')
        }
        else if (openCardValue === 'close'){
            backgroundBlur('off')
            console.log('off')
        }
    }, [openCardValue]); 


    const blurry_background = useRef(null)
   
    function backgroundBlur(x){
        const blurry_background_element = blurry_background.current;
        if (x === 'on'){
            $(blurry_background_element).css('display', 'initial')
        }else if (x === 'off'){
            $(blurry_background_element).css('display', 'none')
        }
   }
    

    var language= 'fr'

    return (
        <>
            <div className="home">
                {pokemonList.map(pokemon => (
                    <Card key={pokemon.id} language={language} pokemon={pokemon}  />
                ))}
            </div>
            <div ref={blurry_background} onClick={closeCardfunction} className='background-blur'></div>
        </>
    );
}





