import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { CharacterCard } from '../character/CharacterCard';
import { useForm } from '../../hooks/useForm';
import { getCharacterByName } from '../../selectors/getCharactersByName';
import { Footer } from '../iu/Footer';

export const SearchScreen = ({history}) => {
    
    const {search} = useLocation();
    const {q = ''} = queryString.parse( search );

    const [formValues, handleInputChange] = useForm({
        searchText: q
    })

    const { searchText } = formValues;
    
    const characterFiltered = useMemo( () => getCharacterByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
        // reset();
    }

    return (
        <>
            <div className="container mt-3 mb-3">
                <h1 className="mb-3 mt-3">Search</h1>

                <div className="row">

                    <div className="col-4">
                        <h4>Find your hero</h4>

                        <form onSubmit={ handleSearch }> 
                            <input 
                                type="text"
                                placeholder="Batman"
                                className="form-control"
                                autoComplete="off"
                                name="searchText"
                                value={ searchText }
                                onChange={ handleInputChange }
                            />

                            <button
                                type="submit"
                                className="btn btn-block btn-search mt-2"
                            >
                                Search
                            </button>

                        </form>

                    </div>

                    <div className="col-8">

                        <h4> Results </h4>

                        {
                            (q === '') && 
                                <div className="alert alert-info animate__animated animate__headShake"> 
                                    Search a hero..
                                </div>
                        }

                        {
                            (q !== '' && characterFiltered.length === 0) 
                                && 
                                <div className="alert alert-danger animate__animated animate__headShake"> 
                                    Not match found..
                                </div>
                        }

                        {
                            characterFiltered.map( character => (
                                <CharacterCard 
                                    key={character.name}
                                    {...character}
                                />
                            ))
                        }

                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}
