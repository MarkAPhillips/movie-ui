import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { truncateText } from '../../utilities/truncate-text';
import { MovieImage } from '../MovieImage/MovieImage';
import { useHistory } from 'react-router-dom';

// types
import { MovieType } from '../../types';

type PanelTypes = {
  panelHeight: number;
  isOver: boolean;
};

export type MovieData = {movieData: MovieType};

//<editor-fold desc='Styles'>
const Tile = styled.div`
  flex: none;
  position: relative;
  width: ${props => props.theme.movieWidth}px;
  height: ${props => props.theme.movieHeight}px;
  overflow: hidden;
  margin: 4px;
  cursor: pointer;
`;

const ImagePanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

  // TODO: adding 50 is incorrect on bottom attribute
  // need to work out why panelHeight is coming up short initially.
const Panel = styled.div<PanelTypes>`
  position: absolute;
  background-color: ${props => props.theme.movieOverlay};
  padding: 5px;

  bottom: ${props => props.isOver ? 0 : -(props.panelHeight + 50)}px;
  left: 0;
  transition: all .2s ease-in-out;
  --webkit-transition: all .2s ease-in-out;
`;

const Title = styled.div`
  color: ${props => props.theme.color1};
  font-weight: 700;
  font-size: ${props => props.theme.size12};
`;
const Blurb = styled.div`
  font-size: ${props => props.theme.size12};
  color: ${props => props.theme.color1};
`;
//</editor-fold>

export const MoviePanel = ({movieData}: MovieData) => {
  const history = useHistory();
  const panelRef = useRef<HTMLInputElement>(null);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const [isOver, setIsOver] = useState<boolean>(false);

  useEffect(()=>{
    if(panelRef && panelRef.current){
      setPanelHeight(panelRef.current.offsetHeight);
    }
  }, [panelRef])

  const handleMouseEnter = () => {
    setIsOver(true);
  }

  const handleMouseLeave = () => {
    setIsOver(false);
  }

  const handleClick = () => {
    history.push(`/movie/${movieData.id}`);
  }

  return (
      <Tile data-testid={`trending-${movieData.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>handleClick()}>
          <ImagePanel>
              <MovieImage imageUrl={movieData.imageUrl} />
          </ImagePanel>
          <Panel ref={panelRef} panelHeight={panelHeight} isOver={isOver}>
            <Title>
              {movieData.title}
            </Title>
            <Blurb>
              {truncateText({text: movieData.overview, length: 50})}
            </Blurb>
          </Panel>
      </Tile>
  )
};
