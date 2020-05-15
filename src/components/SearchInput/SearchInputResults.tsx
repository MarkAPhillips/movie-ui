import React from 'react';
import styled from "styled-components";
import { MovieType } from '../../types';

type SearchInputResultsProps = {
  loading: boolean;
  results: MovieType [];
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

export const SearchInputResults = ( { loading, results, handleClick }: SearchInputResultsProps ) => {
  if (loading) return <>Loading...</>;

  return (
      <SearchResultsList>
        {results.map((item) => {
          return <li role="link" onClick={() => handleClick(item.id, item.title)} key={item.id}>{item.title}</li>
        })}
      </SearchResultsList>
  );
};

