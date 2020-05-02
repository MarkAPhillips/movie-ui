import { render } from 'react-dom';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from './client';

// components
import { TrendingMoviesList } from '../src/components/TrendingMoviesList/TrendingMoviesList';
import { PopularMoviesList } from '../src/components/PopularMoviesList/PopularMoviesList'



const App = () => (
    <ApolloProvider client={client}>
      <TrendingMoviesList />
      <PopularMoviesList />
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById('root'));