import React from 'react';
import styled from 'styled-components';
import { formatDate, formatMins } from '../../utilities';
import { MovieType, CastMemberType }  from '../../types';
import { Carousel } from "../Carousel/Carousel";
import { CastMemberTile } from "../CastMemberTile/CastMemberTile";
import { MovieTile } from '../MovieTile/MovieTile';
import { PercentageCircle } from '../PercentageCircle/PercentageCircle';
import { MainCrew } from './MainCrew';
import { SummaryCard } from '../SummaryCard/SummaryCard';

type MovieProps = {
  movie: MovieType;
  showCast?: boolean;
}

const MovieTitle = styled.h2``;

const MovieHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const HeaderContent = styled.div`
  margin: 0 8px;
`;

export const Movie = ( { movie, showCast = false }: MovieProps) => {
  const { credits, recommended  } = movie;
  const { cast = [], crew } = credits;
  const genres = movie.genres.map((item) => item.name).join(', ');
  const percent = movie.voteAverage * 10;
  const cert = movie.certifications.filter((item) => item.countryCode === 'GB' || item.countryCode === 'US');
  const certText = cert.length ? ` - ${cert[0].certification} (${cert[0].countryCode})` : '';
  return (
    <>
      <SummaryCard backDropImage={movie.images.backDrop} posterImage={movie.images.poster} imageType="movie">
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
      </SummaryCard>
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
