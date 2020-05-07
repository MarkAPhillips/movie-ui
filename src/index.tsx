import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client } from './client';
import { theme} from "./styles/theme";

// routes
import { Routes } from "./Routes/Routes";

// styles
import { GlobalStyle } from './styles';

const App = () => (
  <Router>
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </ApolloProvider>
  </Router>
  );

  render(<App />, document.getElementById('root'));
