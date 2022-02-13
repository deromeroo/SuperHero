import { characters } from "../data/CharactersData";

export const getCharacterById = ( name ) => {
    return characters.find( character => character.name === name )
}