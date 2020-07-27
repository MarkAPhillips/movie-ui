import React from 'react';
import styled from 'styled-components';
import { CustomArrowProps } from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { theme } from '../../styles/theme';

type ArrowProps = Pick<CustomArrowProps, 'onClick'>;

const ArrowContainer = styled.div`
  font-size: 18px;
  line-height: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(0,-50%);
  cursor: pointer;
  border: none;
  outline: 0;
  background: 0 0;
  opacity: .9;
  position:absolute;
  left: -10px;
  &:hover {
    opacity: .7;
  }
`;

export const PrevArrow = ({ onClick }: ArrowProps) => (
  <ArrowContainer>
    <FontAwesomeIcon icon={faChevronCircleLeft} color={theme.colorNeptune} onClick={onClick}/>
  </ArrowContainer>
);
