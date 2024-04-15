import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, redirectTo, ...rest }) => {
    return isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
