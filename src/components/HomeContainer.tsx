import React, { useEffect, useState } from 'react';
import first from 'lodash/first';
import { useQuery } from '@apollo/react-hooks';

// queries
import { GET_TRENDING } from '../apollo/queries';

// types
import { MovieType } from '../types';

// components
import { MoviesList, Movie } from '../components';

export const HomeContainer = () => {
  const { loading, error, data } = useQuery(GET_TRENDING);
  const [featuredMovieId, setFeaturedMovieId] = useState<number | undefined>()
  useEffect(() => {
    if (data && data.trending) {
      const featuredMovie: MovieType | undefined = first(data.trending);

      if (featuredMovie) {
        setFeaturedMovieId(+featuredMovie.id);
      }
    }
  }, [data]);
  return (
    <>
      {featuredMovieId && <Movie movieId={featuredMovieId} />}
      <br /><br />
      {data && data.trending && <MoviesList title="Trending Movies" loading={loading} error={error} movies={data.trending} />}
    </>
  );
};
