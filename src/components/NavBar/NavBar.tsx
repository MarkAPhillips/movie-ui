import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchInput } from "../SearchInput/SearchInput";
import { Logo } from '../Logo/Logo';

// styles
const Header = styled.header`
  display: flex;
  background-color: ${props => props.theme.color1};
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.63);
  align-items: center;
  padding: 8px 16px;
  a {
    padding: 0 4px;
    color:  ${props => props.theme.color2};
    text-decoration: none;
    &: hover {
      opacity: 0.7;
    }
  }
`;

Header.displayName = 'Header';

const NavContentPanel = styled.div`
  width: ${props => props.theme.contentWidth}px;
  margin: 10px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  color: ${props => props.theme.color2};
  width: 50%;
`;

export const NavBar = () => {
  return (
    <Header>
      <NavContentPanel>
      <Content>
      <Link to="/">
        <Logo />
      </Link>
      </Content>
      <Content>
        <SearchInput />
      </Content>
      </NavContentPanel>
    </Header>
  )
};
