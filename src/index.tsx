import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import {ThemeProvider} from "styled-components";
import { client } from './client';
import { theme} from "./styles/theme";

// components
import { TrendingMoviesList, PopularMoviesList } from './components';
import { GlobalStyle } from './styles';

const App = () => (
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <TrendingMoviesList />
            <PopularMoviesList />
        </ThemeProvider>
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById('root'));