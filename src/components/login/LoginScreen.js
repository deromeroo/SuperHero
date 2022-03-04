import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { Footer } from '../iu/Footer';

export const LoginScreen = () => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Admin'
            }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel' ;

        window.location.replace(lastPath);
    }

    return (

        <>

            <div className="login-page">

                <div className="login-box ">

                    <div className="card card-outline card-primary">

                        <div className="login-logo text-center card-header">
                            <h5>Super<span>Hero</span></h5>
                        </div>

                        <div className="card-body login-card-body">
                            <h6 className="login-box-msg text-left ml-1">Sign in</h6>

                            <div>
                                <div className="input-group mb-3">

                                    <input type="email" className="form-control" placeholder="Email"/>

                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="bi bi-envelope-fill"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password"/>

                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="bi bi-lock-fill"></i>
                                        </div>
                                    </div>

                                </div>
                            
                                <div className="mt-2 mb-3">
                                    <button 
                                        className="btn btn-dark btn-block"
                                        onClick={ handleLogin }
                                    >
                                        Login
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}
