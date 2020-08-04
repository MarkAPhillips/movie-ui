import React from 'react';
import { useQuery } from '@apollo/client';

// queries
import { GET_TRENDING, GET_POPULAR } from '../apollo/queries';

// components
import { MovieList, FeaturedMovie } from '.';

export const HomeContainer = () => {
  const {
    loading: trendingLoading,
    error: trendingError,
    data: trendingData,
  } = useQuery(GET_TRENDING);
  const { loading: popularLoading, error: popularError, data: popularData } = useQuery(GET_POPULAR);

  return (
    <>
      <FeaturedMovie />
      {popularData && popularData.popular && (
        <MovieList
          title="Popular Movies"
          loading={popularLoading}
          error={popularError}
          movies={popularData.popular}
        />
      )}
      <br />
      <br />
      {trendingData && trendingData.trending && (
        <MovieList
          title="Trending Movies"
          loading={trendingLoading}
          error={trendingError}
          movies={trendingData.trending}
        />
      )}
    </>
  );
};
