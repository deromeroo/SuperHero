import React from 'react';
import { Link } from 'react-router-dom'


export const Footer = () => {

    const date = new Date;
    const year = date.getFullYear();


    return (
        <footer className="copy fixed-bottom">

            <p>Developed by Diego Romero  |  <span>{year}</span>  |  All Rights Reserved ©</p>

        </footer>
    )
}
