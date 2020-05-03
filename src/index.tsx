import { render } from 'react-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';

// components
import { TrendingMoviesList, PopularMoviesList } from './components';
import { GlobalStyle } from './styles';

const App = () => (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <TrendingMoviesList />
      <PopularMoviesList />
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById('root'));