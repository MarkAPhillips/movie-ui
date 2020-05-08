import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// queries
import { GET_POPULAR } from '../../queries';

// types
import { MovieType } from '../../types';

// components
import { MoviePanel } from "../MoviePanel/MoviePanel";
import { Carousel } from "../Carousel/Carousel";

export const PopularMoviesList= () => {
    const { loading, error, data } = useQuery(GET_POPULAR);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

  return (
      <Carousel title={'POPULAR MOVIES'}>
        {
          data.popular && data.popular.map((movie: MovieType) => (
            <MoviePanel movieData={movie} key={movie.id}/>
          ))
        }
      </Carousel>
  )
};
