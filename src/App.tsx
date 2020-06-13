import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';

import Routes from './routes.js';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
