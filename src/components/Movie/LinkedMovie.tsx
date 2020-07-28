import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_MOVIE } from '../../apollo/queries';
import { Movie } from '..';

export const LinkedMovie = () => {
  const { id } = useParams();
  const movieId = +id;

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: movieId, showCast:true, creditsLimit: 14 },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  const { movie } = data;
  return <Movie movie={movie} showCast />

};
