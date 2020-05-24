import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';
import { useHistory } from 'react-router-dom';

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
  padding: 5px;
  bottom: 15px;
  left: 0;
`;
const Title = styled.div`
  color: ${props => props.theme.color1};
  font-weight: 700;
  font-size: ${props => props.theme.size12};
`;
//</editor-fold>

export const CastMemberTile = ({castMemberData}: CastType) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/bio/${castMemberData.id}`);
  }

  return (
    <Tile data-testid={`cast-${castMemberData.id}`} onClick={()=>handleClick()}>
      <ImagePanel>
        <MovieImage imageUrl={castMemberData.person.imageUrl} />
      </ImagePanel>
      <Panel>
        <Title>
          {castMemberData.person.name}
        </Title>
      </Panel>
    </Tile>
  )
};
