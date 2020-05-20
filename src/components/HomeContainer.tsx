import React, { useEffect, useState } from 'react';
import first from 'lodash/first';
import { useQuery } from '@apollo/react-hooks';

// queries
import { GET_TRENDING, GET_POPULAR } from '../apollo/queries';

// types
import { MovieType } from '../types';

// components
import { MovieList, Movie } from '../components';

// styles
import { Title } from '../styles/layout';

export const HomeContainer = () => {

  const { loading: trendingLoading, error: trendingError, data: trendingData } = useQuery(GET_TRENDING);
  const { loading: popularLoading, error: popularError, data: popularData } = useQuery(GET_POPULAR);

  const [featuredMovieId, setFeaturedMovieId] = useState<number | undefined>()
  useEffect(() => {
    if (popularData && popularData.popular) {
      const featuredMovie: MovieType | undefined = first(popularData.popular);
      if (featuredMovie) {
        setFeaturedMovieId(+featuredMovie.id);
      }
    }
  }, [popularData]);

  return (
    <>
      {featuredMovieId && (
        <>
        <Title>Featured</Title>
        <br />
        <Movie movieId={featuredMovieId} />
        <br />
        </>
      )}
      {popularData && popularData.popular && (
        <MovieList
          title="Popular Movies"
          loading={popularLoading}
          error={popularError}
          movies={popularData.popular}
        />
      )}
      <br /><br />
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
