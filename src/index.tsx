import { render } from 'react-dom';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import { TrendingMoviesList } from '../src/components/TrendingMoviesList/TrendingMoviesList';
import { PopularMoviesList } from '../src/components/PopularMoviesList/PopularMoviesList'

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

const testMovieList = [
    {id:'1',title:'title1',overview:'overview1'},
    {id:'2',title:'title2',overview:'overview2'}
];

const App = () => (
    <ApolloProvider client={client}>
      <div>
      <TrendingMoviesList list={testMovieList} />
      <PopularMoviesList />
      </div>
    </ApolloProvider>
  );
  
  render(<App />, document.getElementById('root'));