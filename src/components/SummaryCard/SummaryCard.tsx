import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { MovieImage } from '../MovieImage/MovieImage';

type SummaryCardProps = {
  imageUrl: string;
  imageType: 'movie' | 'person';
  children: ReactNode;
}

// styles
const SummaryCardPanel = styled.div<Pick<SummaryCardProps, 'imageUrl'>>`
  position: relative;
  padding: 16px;
  display: flex;
  &:before {
    content: "";
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
    border-radius: 5px;
  }
`;

const ImagePanel = styled.div``;

const SummaryCardContent = styled.div`
  margin-left: 16px;
`;

export const SummaryCard = ( { imageUrl, imageType, children }: SummaryCardProps) => {
  return (
    <SummaryCardPanel imageUrl={imageUrl}>
      <ImagePanel>
        <MovieImage
          imageUrl={imageUrl}
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
  )
};
