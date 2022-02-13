import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes';


export const PublicRoute = () => {

    const {user} = useContext(AuthContext);

    return !user.logged
        ? <LoginScreen />
        : <DashboardRoutes />
}
