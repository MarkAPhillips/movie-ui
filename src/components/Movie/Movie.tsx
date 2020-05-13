import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

// queries
import { GET_MOVIE } from '../../queries';



export const Movie = () => {
  let { id } = useParams();

  useEffect(()=>{

  },[id])

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { movieId: Number(id) },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  return (
    <div>Movie {data.movie && data.movie.title}</div>
  )
};
