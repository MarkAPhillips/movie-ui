import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// queries
import { GET_MOVIE } from '../../apollo/queries';
import { formatDate, formatMins } from '../../utilities';

// types
import { MovieType, CastMemberType }  from '../../types';

// components
import { MovieImage } from '../MovieImage/MovieImage';
import { Carousel } from "../Carousel/Carousel";
import { CastMemberTile } from "../CastMemberTile/CastMemberTile";
import { MovieTile } from '../MovieTile/MovieTile';
import { ApolloData } from '../../apollo/types';
import { PercentageCircle } from '../PercentageCircle/PercentageCircle';
import { MainCrew } from './MainCrew';

// styles

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

const MovieTitle = styled.h2``;
const ImagePanel = styled.div``;
const MovieHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 16px;
`;

const HeaderContent = styled.div`
  margin: 0 8px;
`;

type MovieProps = {
  movieId?: number;
  showCast?: boolean;
}

export const Movie = ( { movieId, showCast = false }: MovieProps) => {

  if (!movieId ) {
    const { id } = useParams();
    movieId = +id;
  }

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: movieId, showCast },
  }) as ApolloData<MovieType>;

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { movie, movie: { credits, recommended } } = data;
  const { cast = [], crew } = credits;
  const genres = movie.genres.map((item) => item.name).join(', ');
  const percent = movie.voteAverage * 10;
  const cert = movie.certifications.filter((item) => item.countryCode === 'GB' || item.countryCode === 'US');
  const certText = cert.length ? ` - ${cert[0].certification} (${cert[0].countryCode})` : '';
  return (
    <>
    <MoviePanel imageUrl={movie.imageUrl}>
      <ImagePanel>
        <MovieImage
          imageUrl={movie.imageUrl}
          type="movie"
          fontSize={100}
          height={360}
          width={254}
        />
      </ImagePanel>
      <Content>
        <MovieHeader>
          <HeaderContent>
            <PercentageCircle percent={percent} />
          </HeaderContent>
          <HeaderContent>
            <MovieTitle>{movie.title} ({formatDate(movie.releaseDate, 'YYYY')})</MovieTitle>
            {formatDate(movie.releaseDate)} - {genres} {formatMins(movie.runTime)} {certText}
        </HeaderContent>
        </MovieHeader>
        <strong>Overview</strong><br/>
        {movie.overview}<br/><br/>
        <MainCrew crew={crew} />
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
    { showCast && recommended.length > 0 && <Carousel title={'Recommended Movies'}>
      {
        recommended.map((movie: MovieType) => (
          <MovieTile movieData={movie} key={movie.id}/>
        ))
      }
    </Carousel>}
    </>
  )
};
