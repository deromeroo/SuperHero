import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes'

export const PrivateRoute = () => {

    const {user} = useContext(AuthContext);

    const { pathname , search } = useLocation();

    localStorage.setItem('lastPath', pathname + search );

    return user.logged
        ? <DashboardRoutes />
        : <LoginScreen />
}
