import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    background: '#FAFBFC',
    bannerColor: '#016AA7',
    white: '#FFF',
    black: '#000',
    red: '#FF0000',
    gray: '#7e859040',
    grayText: '#5e6c84',
    lightGray: '#EBECF0',
    blue: '#04527F',
    blueButton: '#026aa7',
    darkBlue: '#172b4d',
    lightBlue: '#5897C1',
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
