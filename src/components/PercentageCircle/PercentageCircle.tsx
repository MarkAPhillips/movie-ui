import React from 'react';
import styled, { keyframes } from "styled-components";

type PercentageCircleProps = {
  percent: number;
};

const progress = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`
const PercentageCircleSvg = styled.svg`
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 60px;
  & .percentage {
    fill: ${props => props.theme.colorCello};
    font-size: 0.6em;
    text-anchor: middle;
  }
  & .circle-bg {
    fill: none;
    stroke:  ${props => props.theme.colorNeptune};
    stroke-width: 3.5;
  }
  & .circle {
    fill: none;
    stroke: ${props => props.theme.colorCello};
    stroke-width: 3.4;
    stroke-linecap: round;
    animation: ${progress} 1s ease-out forwards;
  }
`;

export const PercentageCircle = ({ percent }: PercentageCircleProps) => {
  const strokeDashArray = `${percent}, 100`;
  return (
    <PercentageCircleSvg viewBox="0 0 36 36" width="60px">
    <path className="circle-bg"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path className="circle"
      strokeDasharray={strokeDashArray}
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="18" y="20.35" className="percentage">{percent}%</text>
  </PercentageCircleSvg>
  )
};
