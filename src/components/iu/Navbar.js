import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const handleLogout = () => {

        dispatch({
            type: types.logout
        });

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark first-nav px-3 py-2">
            
            <Link 
                className="navbar-brand" 
                to="/marvel"
            >
                Super<span >Hero</span>
            </Link>

            <div className="">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        <div className="search-icon">
                            Search <i className="bi bi-search"></i>
                        </div>

                    </NavLink>

                    <NavLink 
                        className="navbar-toggler"
                        onClick={ handleLogout }
                        exact 
                        to={'/login'}
                    >
                        <i className="bi bi-box-arrow-in-right"></i>
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link user">
                        {user.name}
                    </span>


                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        onClick={ handleLogout }
                        exact 
                        to={'/login'}
                    >
                        Logout <i className="bi bi-box-arrow-in-right"></i>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}