import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { SearchInput } from '../SearchInput/SearchInput';
import { Logo } from '../Logo/Logo';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { SET_SEARCH_TEXT, GET_STATE } from '../../apollo/cache';

const NavBarPanel = styled.header`
  display: flex;
  background-color: ${props => props.theme.colorCello};
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.63);
  align-items: center;
  padding: 8px 16px;
`;

const NavContentPanel = styled.div`
  width: ${props => props.theme.contentWidth}px;
  margin: 10px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  color: ${props => props.theme.colorWhite};
  width:50%;
`;

const FlexContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SearchPanel = styled.div`
  width: 70%;
`;
const LoginPanel = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const NavBar = () => {
  const history = useHistory();
  const { data: { state } } = useQuery<any>(GET_STATE);
  const { searchText } = state;
  const [ handleSearchText ] = useMutation(SET_SEARCH_TEXT);
  return (
    <NavBarPanel>
      <NavContentPanel>
        <Content>
          <Logo/>
        </Content>
        <FlexContent>
          <SearchPanel>
          <SearchInput
            searchText={searchText}
            handleSearchText={(searchText: string) => handleSearchText({ variables: { searchText }})}
          />
          </SearchPanel>
          <LoginPanel onClick={() => history.push('/auth/login')}>Sign in</LoginPanel>
          <LoginPanel onClick={() => history.push('/auth/register')}>Register</LoginPanel>
        </FlexContent>
      </NavContentPanel>
    </NavBarPanel>
  )
};
