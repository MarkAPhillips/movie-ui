import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  justify-content: space-around;
  &:hover {
    opacity: 0.7;
  }
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colorWhite};
`;

const IconContainer = styled.div`
  padding: 4px;
  background: ${props => props.theme.colorNeptune};
  color: ${props => props.theme.colorCello};
  border-radius: 5px;
`;

const TextContainer = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Logo = () => (
  <MovieLink to="/">
    <LogoContainer>
      <IconContainer>
        <FontAwesomeIcon icon={faVideo} />
      </IconContainer>
      <TextContainer>Movie Watch</TextContainer>
    </LogoContainer>
  </MovieLink>
);
