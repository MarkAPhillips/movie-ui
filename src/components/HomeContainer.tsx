import React from 'react';

// components
import { MoviesList, Movie } from '../components';

export const HomeContainer = () => {
  return (
      <>
        <Movie />
        <br/><br/>
        <MoviesList title="Popular Movies" />
        <br/><br/>
        <MoviesList title="Trending Movies"/>
    </>
  );
};
