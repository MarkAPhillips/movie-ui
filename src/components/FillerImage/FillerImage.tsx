import React from 'react';
import styled from 'styled-components';
import { faUser, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FillerImageProps = {
  imageType: 'movie' | 'person';
  width?: number;
  height?: number;
  fontSize?: number;
}

const FillerImagePanel = styled.div<Pick<FillerImageProps, 'width' | 'height' | 'fontSize' >>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fontSize}px;
  opacity: 0.1;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
`;

export const FillerImage = ({
  imageType, width = 154, height = 231, fontSize = 148,
}: FillerImageProps) => {
  const icon = imageType === 'movie' ? faFilm : faUser;

  return (
    <FillerImagePanel
      height={height}
      width={width}
      fontSize={fontSize}
    >
      <FontAwesomeIcon icon={icon} />
    </FillerImagePanel>
  );
};
