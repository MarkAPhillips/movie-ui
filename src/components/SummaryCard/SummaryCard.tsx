import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';

type SummaryCardProps = {
  posterImage?: string;
  backDropImage?: string;
  imageType: 'movie' | 'person';
  children: ReactNode;
}

type SummaryCardPanelProps = {
  imageUrl?: string;
  imageType: 'movie' | 'person';
}

// styles
const SummaryCardPanel = styled.div<SummaryCardPanelProps>`
  position: relative;
  padding: 16px;
  display: flex;
  ${(props) => (props.imageType === 'movie'
    ? `&:before {
      content: "";
      background-image: url(${props.imageUrl});
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.1;
      border-radius: 5px;
  }` : null)}
`;

const ImagePanel = styled.div``;

const SummaryCardContent = styled.div`
  margin-left: 16px;
`;

export const SummaryCard = ({
  posterImage, backDropImage, imageType, children,
}: SummaryCardProps) => (
  <SummaryCardPanel imageUrl={backDropImage} imageType={imageType}>
    <ImagePanel>
      <MovieImage
        imageUrl={posterImage}
        type={imageType}
        fontSize={100}
        height={360}
        width={254}
      />
    </ImagePanel>
    <SummaryCardContent>
      {children}
    </SummaryCardContent>
  </SummaryCardPanel>
);
