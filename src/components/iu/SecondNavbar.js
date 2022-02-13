import React from 'react'
import { NavLink } from 'react-router-dom'

export const SecondNavbar = ({data}) => {

    const { nav1, nav2 } = data;   
    
    return (

        <div className="navbar navbar-expand-sm navbar-dark px-3 py-2 ">
            <div className="navbar-nav second-nav  m-auto">
            
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to={nav1.url}
                >
                    {nav1.name}
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to={nav2.url}
                >
                    {nav2.name}
                </NavLink>

            </div>
        </div>
    )
}

