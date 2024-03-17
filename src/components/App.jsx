import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));
const ForgotPassword = lazy(() => import('../pages/ForgotPasswordPage'));
const NewPassword = lazy(() => import('../pages/NewPasswordPage'));

function App() {
  return (
    <>
      <Toaster positions="top-right" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="forgotpass"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="newpass"
            element={
              <PublicRoute>
                <NewPassword />
              </PublicRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
