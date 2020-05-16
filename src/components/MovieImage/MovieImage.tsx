import React from 'react';
import styled from "styled-components";

type MovieImageProps = {
  imageUrl?: string;
}

const Image = styled.img`
  border-radius: 10px;
`;

Image.displayName = 'Image';

export const MovieImage = ({ imageUrl }: MovieImageProps) => {
  return (
    <>
      {imageUrl && <Image src={imageUrl} width='154px' height='231px' />}
    </>
  )
};
