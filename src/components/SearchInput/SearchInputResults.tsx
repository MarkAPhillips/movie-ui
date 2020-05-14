import React from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ApolloError } from 'apollo-boost';
import { MovieType } from '../../types';

type SearchInputResultsPropType = {
  loading: boolean;
  results: MovieType [];
  error: ApolloError | undefined;
}

const SearchResultsList = styled.ul`
  list-style: none;
  padding: 8px;
  li {
    padding: 4px;
    &:hover {
      cursor: pointer;
      background: ${props => props.theme.color3};
    }
  }
`;

export const SearchInputResults = ( { loading, error, results }: SearchInputResultsPropType ) => {
  const history = useHistory();
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const handleClick = (id: string) => {
    history.push(`/movie/${id}`);
  }
  return (
      <SearchResultsList>
        {results.map((item) => {
          return <li role="link" onClick={() => handleClick(item.id)} key={item.id}>{item.title}</li>
        })}
      </SearchResultsList>
  );
};

