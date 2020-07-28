import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieImage } from '../MovieImage/MovieImage';
import { CastMemberType } from '../../types';

export type CastType = { castMemberData: CastMemberType };

const Tile = styled.div`
  flex: none;
  position: relative;
  width: ${props => props.theme.movieWidth}px;
  height: ${props => props.theme.movieHeight}px;
  overflow: hidden;
  margin: 16px;
  cursor: pointer;
`;

const ImagePanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Panel = styled.div`
  position: absolute;
  background-color: ${props => props.theme.movieOverlay};
  bottom: 4px;
  left: 0;
  width: 100%;
  padding: 4px 0 8px 4px;
  height: 48px;
`;

const Title = styled.div`
  color: ${props => props.theme.colorCello};
  font-size: ${props => props.theme.size12};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CastMemberTile = ({ castMemberData }: CastType) => {
  const { id, person, character } = castMemberData;
  const link = `/bio/${person.id}`;
  return (
    <Link to={link}>
      <Tile data-testid={`cast-${id}`} title="View biography">
        <ImagePanel>
          <MovieImage imageUrl={person.imageUrl} type="person" />
        </ImagePanel>
        <Panel>
          <Title>
            <strong>{person.name}</strong>
            <br />
            {character}
          </Title>
        </Panel>
      </Tile>
    </Link>
  );
};
