import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../UserContext'

const ProtectedRoute = ({allowedRoutes, children}) => {
    const {user} = useAuth()
    if(!allowedRoutes.includes(user))
        return <Navigate to="/unauthorised"/>
    return children
}

export default ProtectedRoute