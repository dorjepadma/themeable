import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const darkOrLightTheme = createContext(); 

export const LightDarkProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState('dark');

  const toggle = ({ target }) => {
  //if target is checked set the theme to dark. Set to light if not checked.
    if(target.checked) setDarkTheme('dark');
    if(!target.checked) setDarkTheme('light');
  };

  return (
    <darkOrLightTheme.Provider value={{ darkTheme, toggle }}>
      { children }
    </darkOrLightTheme.Provider>);
};
lightDarkProvider.propTypes = {
  children:PropTypes.node
};

export const useToggle = () => {
  const { toggle } = useContext(darkOrLightTheme);
  return toggle;
};
export const useDark = () => {
  const { darkTheme } = useContext(darkOrLightTheme);
  return darkTheme;
};
export default lightDarkProvider;
