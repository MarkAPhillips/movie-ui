import React, { useEffect } from 'react';
import first from 'lodash/first';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { SET_FEATURED_MOVIE } from '../../apollo/mutations';

// queries
import { GET_POPULAR } from '../../apollo/queries';

// types
import { MovieType } from '../../types';

// components
import { MoviePanel } from "../MoviePanel/MoviePanel";
import { Carousel } from "../Carousel/Carousel";

export const PopularMoviesList= () => {
    const { loading, error, data } = useQuery(GET_POPULAR);
    const [ setFeaturedMovie ] = useMutation(SET_FEATURED_MOVIE);
    useEffect(() => {
      if(data && data.popular) {
        const featuredMovie: MovieType | undefined = first(data.popular);
        if (featuredMovie ) {
          setFeaturedMovie( { variables: { id: featuredMovie.id } });
        }
      }
    }, [data]);
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
