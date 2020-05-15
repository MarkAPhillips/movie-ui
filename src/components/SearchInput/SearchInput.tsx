import React, { ChangeEvent, useState, useEffect } from 'react';
import styled from "styled-components";
import { useLazyQuery } from '@apollo/react-hooks';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchInputResults } from './SearchInputResults';
import { SEARCH_MOVIES } from '../../queries';
import { useDebounce } from '../../hooks/useDebounce';
import { MovieType, SearchMoviesType } from '../../types';

const SearchInputPanel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SearchResultsPanel = styled.div`
  border: 1px solid ${props => props.theme.color3};
  border-top: 0;
  min-height: 100px;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.color3};
  border-right: none;
  padding: 0 12px;
  height: 32px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: ${props => props.theme.color1};
`;

const InputPanel = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding-top: 16px;
`;

const Button = styled.button`
  width: 40px;
  height: 32px;
  border: 1px solid ${props => props.theme.color3};
  background:  ${props => props.theme.color3};
  color: ${props => props.theme.color2};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;

type InputEvent = ChangeEvent<HTMLInputElement>;

export const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [results, setResults] = useState<MovieType[]>([]);
  const debouncedSearchText = useDebounce<string>(searchText, 1000);
  const [searchMovies, { loading, error, data }] = useLazyQuery<SearchMoviesType>(SEARCH_MOVIES, {
    variables: { searchText: debouncedSearchText },
  });

  useEffect(() => {
    if (debouncedSearchText) {
      searchMovies();
    }
  }, [debouncedSearchText])

  useEffect(() => {
    if (data) {
      const { search } = data;
      const { edges = [] } = search;
      const mappedResults = edges.map((item) => (item.node));
      setResults(mappedResults);
    }
  }, [data])

  const handleChange = ({ target }: InputEvent) => {
    setSearchText(target.value);
  };

  return (
    <SearchInputPanel>
      <InputPanel>
        <Input
          type="text"
          placeholder="Search Movies..."
          onChange={handleChange}
          value={searchText}
        />
        <Button><FontAwesomeIcon icon={faSearch} /></Button>
      </InputPanel>
      { results.length > 0 && <SearchResultsPanel>
        <SearchInputResults loading={loading} results={results} error={error} />
      </SearchResultsPanel> }
    </SearchInputPanel>
  );
};
