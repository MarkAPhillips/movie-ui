import React from 'react';
import styled from "styled-components";

// types
import { CarouselType } from "../../types";

// styles
const Container = styled.div`
  width: ${props => props.theme.contentWidth}px;
  padding-bottom: 3px;
  overflow-x: auto;

  &::-webkit-scrollbar {
      background: ${props => props.theme.color3};
      height:7px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color4};
    }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Carousel = ({children}: CarouselType) => {

  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
};
