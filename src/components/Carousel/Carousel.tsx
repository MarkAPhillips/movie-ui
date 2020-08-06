/* eslint-disable react/jsx-props-no-spreading */
import React, { Children } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// types
import { CarouselType } from '../../types';

// styles
import { Title } from '../../styles/layout';
import { Arrow } from './Arrow';

const CarouselContainer = styled.div`
  height: 320px;
  padding: 8px 0;
`;

const NO_OF_SLIDES = 7;

export const Carousel = ({ children, title }: CarouselType) => {
  const infinite = children ? Children.count(children) > NO_OF_SLIDES : false;
  const settings = {
    dots: true,
    arrows: true,
    infinite,
    speed: 500,
    slidesToShow: NO_OF_SLIDES,
    slidesToScroll: NO_OF_SLIDES,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };
  return (
    <CarouselContainer>
      {title
        && <Title data-testid="carousel-title">{title}</Title>}
      <Slider {...settings}>
        {children}
      </Slider>
    </CarouselContainer>
  );
};
