import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { MovieImage } from '../MovieImage/MovieImage';

// types
import { MovieType } from '../../types';

type PanelTypes = {
  panelHeight: number;
  isOver: boolean;
};

export type MovieData = { movieData: MovieType };

const Tile = styled.div`
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

const Panel = styled.div<PanelTypes>`
  position: absolute;
  background-color: ${props => props.theme.movieOverlay};
  bottom: ${props => props.isOver ? 0 : -64}px;
  left: 0;
  transition: all .2s ease-in-out;
  padding: 4px 2px 8px 4px;
  height: 64px;
  width: 100%;
`;

const Title = styled.div`
  color: ${props => props.theme.colorCello};
  font-weight: 700;
  font-size: ${props => props.theme.size12};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Blurb = styled.div`
  font-size: ${props => props.theme.size12};
  color: ${props => props.theme.colorCello};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const MovieTile = ({ movieData }: MovieData) => {
  const history = useHistory();
  const panelRef = useRef<HTMLInputElement>(null);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const [isOver, setIsOver] = useState<boolean>(false);

  useEffect(() => {
    if (panelRef && panelRef.current) {
      setPanelHeight(panelRef.current.offsetHeight);
    }
  }, [panelRef])

  const handleMouseEnter = () => {
    setIsOver(true);
  }

  const handleMouseLeave = () => {
    setIsOver(false);
  }

  const handleClick = () => history.push(`/movie/${movieData.id}`);

  return (
    <Tile data-testid={`trending-${movieData.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleClick()}>
      <ImagePanel>
        <MovieImage imageUrl={movieData.images.poster} type="movie" fontSize={100} />
      </ImagePanel>
      <Panel ref={panelRef} panelHeight={panelHeight} isOver={isOver}>
        <Title>
          {movieData.title}
        </Title>
        <Blurb>
          {movieData.overview}
        </Blurb>
      </Panel>
    </Tile>
  )
};
