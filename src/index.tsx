import { render } from 'react-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './client';

// components
import { TrendingMoviesList, PopularMoviesList } from './components';

const App = () => (
    <ApolloProvider client={client}>
      <TrendingMoviesList />
      <PopularMoviesList />
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById('root'));