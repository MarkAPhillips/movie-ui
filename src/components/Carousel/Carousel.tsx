import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// types
import { CarouselType } from '../../types';

// styles
import { Title } from '../../styles/layout';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';

const CarouselContainer = styled.div`
  height: 320px;
`;

export const Carousel = ({ children, title }: CarouselType) => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <CarouselContainer>
      {title &&
        <Title data-testid="carousel-title">{title}</Title>
      }
      <Slider {...settings}>
        {children}
      </Slider>
    </CarouselContainer>
  )
};
