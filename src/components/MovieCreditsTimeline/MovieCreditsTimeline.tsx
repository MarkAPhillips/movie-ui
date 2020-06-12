import React from 'react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import { MovieCreditType } from '../../types';
import { formatDate } from '../../utilities';
import { MovieImage } from '../MovieImage/MovieImage';

type MovieCreditsTimelineProps = {
  credits: MovieCreditType[];
};

type MovieCreditProps = {
  releaseDate: string | null;
};

const MovieCreditsTimelinePanel = styled.div`
  margin-top: 40px;
  margin-left: 160px;
`;

const MovieCreditsTimelineList = styled.ul`
  border-left: 4px solid ${props => props.theme.color3};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  width: 100%;
`;

const MovieCredit = styled.li<MovieCreditProps>`
  border-bottom: 1px dashed ${props => props.theme.color3};
  padding-bottom: 25px;
  margin-bottom: 20px;
  position: relative;
  &:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }
  &:before {
    position: absolute;
    display: block;
    top: 0;
    left: -217.5px;
    content: "${props => props.releaseDate}";
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
  }
  &:after {
    position: absolute;
    display: block;
    top: 0;
    box-shadow: 0 0 0 4px ${props => props.theme.color3};
    left: -56.85px;
    background: ${props => props.theme.color1};
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: "";
    top: 5px;
  }
`;

const MovieCreditPanel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  background: ${props => props.theme.color5};
  border-radius: 4px;
`;

const MovieImagePanel = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const MovieTextPanel = styled.div`
  padding: 16px;
`;

export const MovieCreditsTimeline = ({ credits }: MovieCreditsTimelineProps) => {
  const sortedCredits = orderBy(credits, ['movie.releaseDate'], ['desc'])
    .filter((item) => item.movie && item.movie.releaseDate);
  return (
    <MovieCreditsTimelinePanel>
      <MovieCreditsTimelineList>
        {sortedCredits.map((credit) => {
          const { id, character, movie } = credit;
          const releaseDate = formatDate(movie.releaseDate);
          return (
            <MovieCredit key={id} releaseDate={releaseDate}>
              <MovieCreditPanel>
                <MovieImagePanel><MovieImage imageUrl={movie.imageUrl} type="movie" height={200} width={140} fontSize={90} /></MovieImagePanel>
                <MovieTextPanel><strong>{movie.title}</strong><br/>Cast as: {character}</MovieTextPanel>
              </MovieCreditPanel>
            </MovieCredit>
          );
        })}
      </MovieCreditsTimelineList>
    </MovieCreditsTimelinePanel>
  );
}
