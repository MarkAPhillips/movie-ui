import React from 'react';
import styled from "styled-components";
import { truncateText } from "../../utilities/truncate-text";

// types
import { TrendingMovieItem } from '../../types';
export type MovieData = {movieData: TrendingMovieItem};

//<editor-fold desc="Styles">
const Tile = styled.div`
  flex: none;
  position: relative;
  border: 1px solid gray;
  width: ${props => props.theme.movieWidth};
  height: ${props => props.theme.movieHeight};
  overflow: hidden;
  margin-right: 5px;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Panel = styled.div`
  position: absolute;
  background-color: ${props => props.theme.movieOverlay};
  top: 0;
  left: 0;
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
    return (
        <Tile data-testid={`trending-${movieData.id}`}>
            <Image>
                <img src={movieData.imageUrl} width='154px' height='231px' />
            </Image>
            <Panel>
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