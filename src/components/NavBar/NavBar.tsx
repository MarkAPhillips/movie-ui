import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { SearchInput } from '../SearchInput/SearchInput';
import { Logo } from '../Logo/Logo';
import { LoginMenu, LogoutMenu } from '..';
import { searchTextVar, GET_APP_STATE } from '../../apollo/appState';
import { getName } from '../Auth/utils';

const NavBarPanel = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.colorCello};
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.63);
  align-items: center;
  padding: 8px 16px;
`;

const NavContentPanel = styled.div`
  width: ${(props) => props.theme.contentWidth}px;
  margin: 10px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  color: ${(props) => props.theme.colorWhite};
  width: 50%;
`;

const FlexContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SearchPanel = styled.div`
  width: 60%
`;

const LoginPanel = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const NavBar = () => {
  const { data } = useQuery(GET_APP_STATE);
  const [name, setName] = useState('');
  const { state: { isAuthorised, searchText } } = data;

  useEffect(() => {
    if (isAuthorised) setName(getName());
  }, [isAuthorised]);

  return (
    <NavBarPanel>
      <NavContentPanel>
        <Content>
          <Logo />
        </Content>
        <FlexContent>
          <SearchPanel>
            <SearchInput
              searchText={searchText}
              handleSearchText={(text: string) => searchTextVar(text)}
            />
          </SearchPanel>
          <LoginPanel>
            {isAuthorised ? <LogoutMenu name={name} /> : <LoginMenu />}
          </LoginPanel>
        </FlexContent>
      </NavContentPanel>
    </NavBarPanel>
  );
};
