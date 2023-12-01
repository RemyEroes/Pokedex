import { useContext } from 'react';
import '../css/home.css'
// import GlareCard from '../components/Card'
import Card from '../components/Card'
import {PokemonContext} from '../components/PokemonContext';



export default function Home() {

    const {pokemonList } = useContext(PokemonContext)
    

    // console.log(typeList);

    var language= 'fr'

    return (
            <div className="home">
                {pokemonList.map(pokemon => (
                    <Card key={pokemon.id} language={language} pokemon={pokemon}  />
                ))}
            </div>
    );
}



