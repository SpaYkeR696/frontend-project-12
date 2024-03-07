/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useMemo } from 'react';
import Context from './index.js';

const MainProvider = ({ children }) => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

  const memo = useMemo(() => ({ data: userData, setUserData }), [userData]);

  return (
    <Context.Provider value={memo}>
      {children}
    </Context.Provider>
  );
};

export default MainProvider;
