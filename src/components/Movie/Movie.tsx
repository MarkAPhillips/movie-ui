import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

// queries
import { GET_MOVIE } from '../../queries';

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
    variables: { movieId: Number(id) },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  return (
    <>
      <Title>
        <b>{data.movie.title}</b>
        <Circle>{data.movie.voteAverage * 10}%</Circle>
      </Title>
      <i>{data.movie.overview}</i><br/><br/>
      <b>Release Date:</b> {data.movie.releaseDate}
      <br/><br/>
      <img src={data.movie.imageUrl} width='154px' height='231px' />
      <br/><br/>

    </>

  )
};
