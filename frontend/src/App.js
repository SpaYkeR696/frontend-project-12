/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Checker from './pages/chat/component/Checker';
import Login from './pages/login/Login';
import NotFoundPage from './pages/notFoundPages';
import Signup from './pages/Signup/Signup';

// eslint-disable-next-line import/extensions
import { useAuthContext } from './context/index.js';
import MainProvider from './context/MainProvider';

// eslint-disable-next-line react/function-component-definition
const PrivateRoute = ({ children }) => {
  const authContext = useAuthContext();
  // eslint-disable-next-line react/jsx-filename-extension
  return authContext.data ? children : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  const authContext = useAuthContext();
  return authContext.data ? <Navigate to="/" /> : children;
};

const App = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<PrivateRoute><Checker /></PrivateRoute>)} />
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </MainProvider>
);

export default App;
