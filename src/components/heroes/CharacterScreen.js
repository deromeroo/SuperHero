import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Footer } from '../iu/Footer';
import { getCharacterById } from '../selectors/getCharacterById';

export const CharacterScreen = ({history}) => {

    const { characterId } = useParams();
    
    const character = useMemo( () => getCharacterById( characterId ), [characterId] ) ;

    if( !character ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.length <= 2) {
            history.push("/");
        }else{
            history.goBack();
        }

    }

    const{
        name,
        biography,
        work,
        connections,
        image
    } = character;

    return (
        <>
            <div className="container">
                <div className="row mt-5  mb-5">
                    <div className="col-4">
                        <button  
                            className="btn btn-back mb-3" 
                            onClick={ handleReturn }
                        >
                            <i className="bi bi-arrow-left-square-fill"></i>
                        </button>
                        <img 
                            src={image.url} 
                            alt={name}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    </div>

                    <div className="col-8 mb-3">
                        <h3 className="mt-3">{name}</h3>

                        <ul className=" list-group list-group-flush">
                            <li className="list-group-item text-muted"> <b>Publisher:</b> {biography['publisher']}. </li>
                            <li className="list-group-item text-muted"> <b>Name:</b> {biography['full-name']} </li>
                            <li className="list-group-item text-muted"> <b>Alter Egos:</b> {biography['alter-egos']} </li>
                            <li className="list-group-item text-muted"> <b>Relatives:</b> {connections.relatives} </li>
                            <li className="list-group-item text-muted"> <b>Aliases:</b> {biography.aliases}. </li>
                            <li className="list-group-item text-muted"> <b>Place of Birth:</b> {biography['place-of-birth']}. </li>
                            <li className="list-group-item text-muted"> <b>First Appearance:</b> {biography['first-appearance']} (Comics). </li>
                            <li className="list-group-item text-muted"> <b>Occupation:</b> {work.occupation}. </li>
                            <li className="list-group-item text-muted"> <b>Group Affiliation:</b> {connections['group-affiliation']}. </li>
                        </ul>


                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
