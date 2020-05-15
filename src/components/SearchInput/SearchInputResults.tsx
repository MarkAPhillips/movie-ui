import React from 'react';
import styled from "styled-components";
import { ApolloError } from 'apollo-boost';
import { MovieType } from '../../types';

type SearchInputResultsProps = {
  loading: boolean;
  results: MovieType [];
  error: ApolloError | undefined;
  handleClick: (id: string, title: string) => void;
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

SearchResultsList.displayName = 'SearchResultsList';

export const SearchInputResults = ( { loading, error, results, handleClick }: SearchInputResultsProps ) => {
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  return (
      <SearchResultsList>
        {results.map((item) => {
          return <li role="link" onClick={() => handleClick(item.id, item.title)} key={item.id}>{item.title}</li>
        })}
      </SearchResultsList>
  );
};

