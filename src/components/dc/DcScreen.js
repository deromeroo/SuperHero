import React from 'react'
import { CharactersList } from '../character/CharactersList'
import { Footer } from '../iu/Footer'
import { SecondNavbar } from '../iu/SecondNavbar'

export const DcScreen = () => {

    const data = {
        nav1: {
            name: 'HEROES',
            url: '/dc'
        },
        nav2: {
            name: 'VILLAINS',
            url: '/dc/villains'
        }
    }


    return (
        <>
            <div className="dc-cover"></div>

            <SecondNavbar data={data}/>

            <div className="container mt-3">
                <h1 className="mb-3 mt-3 text-center">DC HEROES</h1>

                <div>
                    <CharactersList publisher={"DC Comics"} alignment={"good"} />
                </div>

            </div>
            
            <Footer />
        </>
    )
}
