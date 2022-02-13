import React from 'react';
import { Link } from 'react-router-dom'


export const Footer = () => {

    const date = new Date;
    const year = date.getFullYear();


    return (
        <footer className="copy fixed-bottom">

            <Link 
                to="/github" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
            </Link>

            <p>Developed by Diego Romero  |  <span>{year}</span>  |  All Rights Reserved ©</p>

            <Link 
                to="/linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
            </Link>  

        </footer>
    )
}
