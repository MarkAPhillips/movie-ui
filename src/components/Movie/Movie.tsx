import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';

// queries
import { GET_MOVIE } from '../../queries';
import { formatDate } from '../../utilities';

// styles
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: yellow;
`;

export const Movie = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { movie } = data;
  return (
    <>
      <Title>
        <strong>{movie.title}</strong>
        <Circle>{movie.voteAverage * 10}%</Circle>
      </Title>
      <i>{movie.overview}</i><br/><br/>
      <b>Release Date:</b> {formatDate(movie.releaseDate) || 'Not specified'}
      <br/><br/>
      <MovieImage imageUrl={movie.imageUrl}/>
      <br/><br/>

    </>

  )
};
