import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#54a0ff',
    secondary: '#5f27cd',
    danger: '#ff6b6b',
    success: '#1dd1a1',
    white: '#fff',
    black: '#000',
    light: '#f4f4f4',
    dark: '#222f3e',
    info: '#48dbfb',
    link: '#48dbfb',
    warning: '#feca57',
    greyLighter: '#c8d6e5',
    greyDarker: '#8395a7',
  },
  fonts: {
    sansSerif: 'Nunito',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  sizings: {
    small: '0.5em',
    medium: '1em',
    large: '2em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
