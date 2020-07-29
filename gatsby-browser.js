// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/utils/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  );
};
