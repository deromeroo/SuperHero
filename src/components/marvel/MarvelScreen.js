import React from 'react'
import {CharactersList} from '../character/CharactersList';
import { Footer } from '../iu/Footer';
import { SecondNavbar } from '../iu/SecondNavbar';

export const MarvelScreen = () => {


    const data = {
        nav1: {
            name: 'HEROES',
            url: '/marvel'
        },
        nav2: {
            name: 'VILLAINS',
            url: '/marvel/villains'
        }
    }


    return (
        <>

            <div className="marvel-cover"></div>

            <SecondNavbar data={data} />

            <div className="container mt-3">
                <h1 className="mb-4 mt-4 text-center">MARVEL HEROES</h1>

                <div className="">
                    <CharactersList publisher="Marvel Comics" alignment="good"/> 
                </div>

            </div>

            <Footer />
        </>
    )
}
