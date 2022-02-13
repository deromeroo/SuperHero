import React, { useMemo } from 'react';
import { getCharactersByPublisher } from '../selectors/getCharactersByPublisher';
import { CharacterCard } from './CharacterCard';

export const CharactersList = ({ publisher, alignment}) => {    
    
    const characters =  useMemo( () => getCharactersByPublisher( publisher, alignment ), [ publisher ])

    return (
        <div className="card-columns animate__animated animate__fadeInUp mb-5">
            {
                characters.map( character => (
                    <CharacterCard 
                        key={ character.name }
                        { ...character } 
                    />
                ))
            } 
        </div>
    )
}
