import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
export const myContext = React.createContext();

const Provider = (props) => {
  const [ isLightMode, setIsLightMode ] = useState(false);

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
