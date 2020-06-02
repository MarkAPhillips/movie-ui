import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// queries
import { GET_MOVIE } from '../../apollo/queries';
import { formatDate } from '../../utilities';

// types
import { MovieType, CastMemberType } from '../../types';

// components
import { MovieImage } from '../MovieImage/MovieImage';
import {Carousel} from "../Carousel/Carousel";
import {CastMemberTile} from "../CastMemberTile/CastMemberTile";
import { MovieTile } from '../MovieTile/MovieTile';

// styles
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

const MoviePanel = styled.div<Pick<MovieType, 'imageUrl'>>`
  position: relative;
  padding: 16px;
  display: flex;
  &:before {
    content: "";
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
    border-radius: 5px;
  }
`;

const ImagePanel = styled.div``;

const Content = styled.div`
  margin-left: 16px;
`;

type MovieProps = {
  movieId?: number;
  showCast?: boolean;
};

export const Movie = ( { movieId, showCast = false }: MovieProps) => {

  if (!movieId ) {
    const { id } = useParams();
    movieId = +id;
  }

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: movieId, showCast },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { movie, movie: { cast, similar } } = data;
  return (
    <>

    <MoviePanel imageUrl={movie.imageUrl}>
      <ImagePanel>
        <MovieImage imageUrl={movie.imageUrl} type="movie" fontSize={100} />
      </ImagePanel>
      <Content>
        <strong>{movie.title}</strong>
          <Circle>{movie.voteAverage * 10}%</Circle>
        <br/>
        {movie.overview}<br/><br/>
        {formatDate(movie.releaseDate)}
      </Content>
    </MoviePanel>
    <br/>
    { showCast && <Carousel title={'Cast'}>
      {
        cast && cast.map((castMember: CastMemberType) => (
          <CastMemberTile castMemberData={castMember} key={castMember.id}/>
        ))
      }
    </Carousel>}
    <br/>
    { showCast && similar.length > 0 && <Carousel title={'Similar Movies'}>
      {
        similar.map((movie: MovieType) => (
          <MovieTile movieData={movie} key={movie.id}/>
        ))
      }
    </Carousel>}
    </>
  )
};
