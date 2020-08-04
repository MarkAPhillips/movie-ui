import React from 'react';
import styled from 'styled-components';
import { CustomArrowProps } from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

type ArrowProps = {
  direction: 'next' | 'prev';
} & Pick<CustomArrowProps, 'onClick'>

type ArrowContainerProps = {
  positionStyle: string;
}

const ArrowContainer = styled.div<ArrowContainerProps>`
  font-size: 20px;
  line-height: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(0,-50%);
  cursor: pointer;
  border: none;
  z-index: 9999;
  outline: 0;
  background: 0 0;
  opacity: .9;
  position: absolute;
  ${(props) => props.positionStyle}
  &:hover {
    opacity: .7;
  }
`;

export const Arrow = ({ onClick, direction }: ArrowProps) => {
  const icon = direction === 'next' ? faChevronCircleRight : faChevronCircleLeft;
  const positionStyle = direction === 'next' ? 'right: -15px;' : 'left: -10px;';
  return (
    <ArrowContainer positionStyle={positionStyle} onClick={onClick}>
      <FontAwesomeIcon icon={icon} color={theme.colorNeptune} />
    </ArrowContainer>
  );
};
