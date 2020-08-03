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
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </myContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
