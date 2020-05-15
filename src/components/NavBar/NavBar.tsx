import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SearchInput } from "../SearchInput/SearchInput";

// styles
const NavContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.color1};
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.63);
  align-items: center;
  padding: 8px;
`;

NavContainer.displayName = 'NavContainer';

const Content = styled.div`
  width: ${props => props.theme.contentWidth}px;
  color: ${props => props.theme.color2};
`;

export const NavBar = () => {
  const history = useHistory();

  const handlePopularClick = () => {
    history.push('/popular');
  }

  const handleTrendingClick = () => {
    history.push('/trending');
  }

  return (
    <NavContainer>
      <Content>
        home |
        <button onClick={()=>handleTrendingClick()}>trending</button> |
        <button onClick={()=>handlePopularClick()}>popular</button>
      </Content>
      <Content>
        <SearchInput />
      </Content>
    </NavContainer>
  )
};
