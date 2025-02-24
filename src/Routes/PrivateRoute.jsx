import React, { useContext, useEffect } from 'react'
import { authContext } from '../Authentication/AuthProvider'
import { Navigate } from 'react-router-dom';




export const PrivateRoute = ({ children }) => {

    const { userData } = useContext(authContext)
    if( userData ) return children

   
    return (! userData && <Navigate to="/signin" replace />);
}
