import React from 'react';
import { useSelector } from 'react-redux';

import { useLocation, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../src/redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
