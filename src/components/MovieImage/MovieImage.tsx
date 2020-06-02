import React from 'react';
import styled from "styled-components";
import { FillerImage } from '../FillerImage/FillerImage';

type MovieImageProps = {
  imageUrl?: string;
  type: 'movie' | 'person';
  fontSize?: number;
  height?: number;
  width?: number;
}

const Image = styled.img`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color4};
  &:hover {
    opacity: 0.7;
  }
`;

Image.displayName = 'Image';

export const MovieImage = ({ imageUrl, type, fontSize, height = 231, width = 154 }: MovieImageProps) => {
  const pixelWidth = `${width}px`;
  const pixelHeight = `${height}px`;
  return (
    <>
      {imageUrl ? <Image src={imageUrl} width={pixelWidth} height={pixelHeight} /> :
      <FillerImage imageType={type} fontSize={fontSize} />
    }
    </>
  )
};
