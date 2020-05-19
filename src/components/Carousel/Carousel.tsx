import React from 'react';
import styled from "styled-components";

// types
import { CarouselType } from "../../types";

// styles
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

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-bottom: 1px;
  padding-left: 10px;
  border-radius: 5px;
  background: ${props => props.theme.color3};
  color: ${props => props.theme.color2};
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
