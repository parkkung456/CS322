// PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PublicRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={!getToken() ? <Element /> : <Navigate to="/premium-content" replace />}
    />
  );
};

export default PublicRoute;
