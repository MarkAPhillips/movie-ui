import React from 'react';
import styled from "styled-components";

// types
import { TrendingMovieItem } from '../../types';
export type MovieData = {movieData: TrendingMovieItem};

//<editor-fold desc="Styles">
const Tile = styled.div`
  flex: none;
  position: relative;
  border: 1px solid gray;
  width: 154px;
  height: 231px;
  overflow: hidden;
  margin-right: 5px;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Blurb = styled.div`
  position: absolute;
  color: white;
  top: 0;
  left: 0;
`;
//</editor-fold>

export const MoviePanel = ({movieData}: MovieData) => {
    return (
        <Tile data-testid={`trending-${movieData.id}`}>
            <Image>
                <img src={movieData.imageUrl} width='154px' height='231px' />
            </Image>
            <Blurb>
                {movieData.id}: {movieData.title} - {movieData.overview}
            </Blurb>
        </Tile>
    )
};