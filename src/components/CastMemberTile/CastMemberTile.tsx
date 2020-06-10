import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { MovieImage } from '../MovieImage/MovieImage';

// types
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
  padding: 4px;
  bottom: 4px;
  left: 0;
  width: 140px;
`;

const Title = styled.div`
  color: ${props => props.theme.color1};
  font-size: ${props => props.theme.size12};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CastMemberTile = ({ castMemberData }: CastType) => {
  const history = useHistory();
  const { id, person, character } = castMemberData;
  const handleClick = () => history.push(`/bio/${person.id}`);
  return (
    <Tile data-testid={`cast-${id}`} onClick={handleClick} title="View biography">
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
  )
};
