import React from 'react';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';
import { FillerImage } from '../FillerImage/FillerImage';

// types
import {CastMemberType} from '../../types';

export type CastType = {castMemberData: CastMemberType};

//<editor-fold desc='Styles'>
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
//</editor-fold>

export const CastMemberTile = ({castMemberData}: CastType) => {
  return (
    <Tile data-testid={`cast-${castMemberData.id}`}>
      <ImagePanel>
        {castMemberData.person.imageUrl ?
        <MovieImage imageUrl={castMemberData.person.imageUrl} /> : <FillerImage imageType='person' /> }
      </ImagePanel>
      <Panel>
        <Title>
          <strong>{castMemberData.person.name}</strong>
          <br/>
          { castMemberData.character}
        </Title>
      </Panel>
    </Tile>
  )
};
