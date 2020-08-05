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
    <ThemeProvider theme={theme}>
      <myContext.Provider
        value={{
          isLightMode,
          changeTheme: () => setIsLightMode(!isLightMode)
        }}
      >
        {props.children}
      </myContext.Provider>
    </ThemeProvider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
