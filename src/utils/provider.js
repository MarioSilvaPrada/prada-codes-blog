import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { useLocalStorage } from '../hooks/useLocalStorage';

const defaultState = {
  isLightMode: true,
  changeTheme: () => {}
};

export const myContext = React.createContext(defaultState);

const Provider = (props) => {
  const [ isLightMode, setIsLightMode ] = useLocalStorage('isLightMode', true);

  return (
    <myContext.Provider
      value={{
        isLightMode,
        changeTheme: () => setIsLightMode(!isLightMode)
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <Provider>{element}</Provider>
  </ThemeProvider>
);
