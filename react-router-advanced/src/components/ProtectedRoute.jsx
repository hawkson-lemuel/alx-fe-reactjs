import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../useAuth';

function ProtectedRoute({ children }) {
    const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
