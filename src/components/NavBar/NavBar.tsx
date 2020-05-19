import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput/SearchInput";
import { Logo } from '../Logo/Logo';

// styles
const NavContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.color1};
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.63);
  align-items: center;
  padding: 8px;
  a {
    padding: 0 4px;
    color:  ${props => props.theme.color2};
    text-decoration: none;
    &: hover {
      opacity: 0.7;
    }
  }
`;

NavContainer.displayName = 'NavContainer';

const Content = styled.div`
  width: ${props => props.theme.contentWidth}px;
  color: ${props => props.theme.color2};
`;

export const NavBar = () => {
  return (
    <NavContainer>
      <Content>
      <Link to="/">
        <Logo />
      </Link>
      </Content>
      <Content>
        <SearchInput />
      </Content>
    </NavContainer>
  )
};
