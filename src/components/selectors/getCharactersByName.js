import { characters } from '../data/CharactersData';

export const getCharacterByName = (name = '') => {

    if(name === ''){
        return [];
    }

    name = name.toLowerCase();
    return characters.filter( character => character.name.toLowerCase().includes( name ));
}
