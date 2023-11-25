// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={getToken() ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
