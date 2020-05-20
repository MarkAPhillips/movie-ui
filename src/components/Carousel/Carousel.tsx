import React from 'react';
import styled from "styled-components";

// types
import { CarouselType } from "../../types";

// styles
import { Title } from '../../styles/layout';

const Container = styled.div`
  width: 100%;
  padding-bottom: 3px;
  overflow-x: auto;

  &::-webkit-scrollbar {
      background: ${props => props.theme.color3};
      height:7px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color1};
    }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 280px;
  align-items: center;
`;


export const Carousel = ({children, title}: CarouselType) => {

  return (
    <>
      {title &&
        <Title data-testid="carousel-title">{title}</Title>
      }
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
};
