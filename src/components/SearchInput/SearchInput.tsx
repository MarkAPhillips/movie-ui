import React, { ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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
  position: relative;
`;

const SearchResultsPanel = styled.div`
  border: 1px solid ${props => props.theme.color3};
  background: ${props => props.theme.color2};
  color: ${props => props.theme.color1};
  border-top: 0;
  min-height: 100px;
  width: 100%;
  padding: 4px;
  position: absolute;
  z-index: 99999;
  top: 32px;
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

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [results, setResults] = useState<MovieType[]>([]);
  const history = useHistory();
  const debouncedSearchText = useDebounce<string>(searchText);
  const [searchMovies, { loading, data }] = useLazyQuery<SearchMoviesType>(SEARCH_MOVIES, {
    variables: { searchText: debouncedSearchText },
    onError(err) {
      // TODO: Temp fix to prevent errors on the UI
      // TODO: Need to handle case when - empty text and when no matches occur
      console.warn('Error', err);
      setResults([]);
      setSearchText('');
    },
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

  const handleChange = ({ target }: InputChangeEvent) => {
    setSearchText(target.value);
  };

  const handleClick = (id: string, title: string) => {
      setSearchText(title);
      setResults([]);
      history.push(`/movie/${id}`);
  }

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
        <SearchInputResults loading={loading} results={results} handleClick={handleClick} />
      </SearchResultsPanel> }
    </SearchInputPanel>
  );
};
