import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  justify-content: space-around;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const IconContainer = styled.div`
  padding: 4px;
  background: ${props => props.theme.color3};
  color: ${props => props.theme.color1};
  border-radius: 5px;
`;

const TextContainer = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Logo = () => {
  const history = useHistory();
  return (
    <LogoContainer onClick={() => history.push('/')}>
      <IconContainer>
      <FontAwesomeIcon icon={faVideo} />
      </IconContainer>
      <TextContainer>Movie Watch</TextContainer>
    </LogoContainer>
  )
};
