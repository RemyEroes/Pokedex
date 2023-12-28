import React from 'react';
import '../css/evolutionCardContainer.css'
import EvolutionCard from './EvolutionCard';
import { useTranslation } from 'react-i18next';

// import { use } from 'i18next';

export default function EvolutionCardContainer(props) {

    const pokemon_condition = props.pokemons;
    const evolveType = props.evolvType;
    const isChecked = props.isChecked

    const { t } = useTranslation();

    var pokemons_ids = []
    // push all pokemon id in array
    Object.keys(pokemon_condition).map((key) => (
        pokemons_ids.push(key)
    ));
    
    var pokemons_evolution_conditions = []
    // push conditions pokemon id in array
    Object.values(pokemon_condition).map((value) => (
        pokemons_evolution_conditions.push(value)
    ));

    const evolutionCardClick = props.onEvClick;

    // place item left or right
    if (evolveType === 'preevolution') {
        return (
            <div className='evolution-big-container pre'>
                <div className='evolution-title'>{t('Ancêtres')}</div>
                <div className='evolution-container'>
                {
                    pokemons_ids.map((pokemon_id, index) => (
                        <EvolutionCard key={pokemon_id} pokemonId={pokemon_id}  isChecked={isChecked} condition={pokemons_evolution_conditions[index]} onEvClick={evolutionCardClick}  />
                ))}
                </div>
            </div>
        );
        
    } else if (evolveType === 'futurevolution'){
        return (
            <div className='evolution-big-container post'>
                <div className='evolution-title'>{t('Descendants')}</div>
                <div className='evolution-container'>
                {
                    pokemons_ids.map((pokemon_id, index) => (
                        <EvolutionCard key={pokemon_id} pokemonId={pokemon_id} isChecked={isChecked} condition={pokemons_evolution_conditions[index]} onEvClick={evolutionCardClick}  />
                ))}
                </div>
            </div>
        );
    }

    
};

