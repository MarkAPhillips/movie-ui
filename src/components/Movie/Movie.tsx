import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';

// queries
import { GET_MOVIE } from '../../apollo/queries';
import { formatDate } from '../../utilities';


const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 40px;
  color:${props => props.theme.color2};
  height: 40px;
  border-radius: 20px;
  background: ${props => props.theme.color1};
`;

const MoviePanel = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  &:before {
    content: "";
    background-image: url('https://placekitten.com/1200/800');
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
    border-radius: 5px;
  }
`;

const ImagePanel = styled.div`
`;

const Content = styled.div`
  margin-left: 16px;
`;

type MovieProps = {
  movieId?: number;
};

export const Movie = ( { movieId }: MovieProps) => {

  if (!movieId ) {
    const { id } = useParams();
    movieId = +id;
  }

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: movieId },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { movie } = data;
  return (
    <>

    <MoviePanel>
      <ImagePanel>
        <MovieImage imageUrl={movie.imageUrl}/>
      </ImagePanel>
      <Content>
      <strong>{movie.title}</strong>
        <Circle>{movie.voteAverage * 10}%</Circle>
      <br/>
      {movie.overview}<br/><br/>
      {formatDate(movie.releaseDate)}
      </Content>
    </MoviePanel>
    </>
  )
};
