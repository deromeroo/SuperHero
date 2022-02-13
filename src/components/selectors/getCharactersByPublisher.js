import { characters } from "../data/CharactersData";

export const getCharactersByPublisher = ( publisher, alignment) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if( !validPublishers.includes( publisher ) ){

        throw new Error(`Publisher "${ publisher }" no es correcto`);

    } 

    return characters.filter( character => character.biography.publisher === publisher && character.biography.alignment === alignment);

}