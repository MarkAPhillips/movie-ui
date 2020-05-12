import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// types
import { MovieType } from '../../types';
type PanelTypes = {
  panelHeight: number;
  isOver: boolean;
};

export type MovieData = {movieData: MovieType};

//<editor-fold desc="Styles">
const Tile = styled.div`
  flex: none;
  position: relative;
  width: ${props => props.theme.movieWidth}px;
  height: ${props => props.theme.movieHeight}px;
  overflow: hidden;
  margin-right: 5px;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;


const Panel = styled.div<PanelTypes>`
  position: absolute;
  background-color: ${props => props.theme.movieOverlay};
  padding: 5px;
  // todo: adding 50 is incorrect... need to work out why panelHeight is coming up short initially.
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

export const Movie = ({movieData}: MovieData) => {
  const panelRef = useRef<HTMLInputElement>(null);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const [isOver, setIsOver] = useState<boolean>(false);

  let { id } = useParams();

  useEffect(()=>{}, [])



  return (
    <div>Movie {id}</div>
  )
};
