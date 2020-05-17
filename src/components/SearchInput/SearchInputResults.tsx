import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { MovieType } from '../../types';
import { useKeyPress } from '../../hooks/useKeyPress';

type SearchInputResultsProps = {
  loading: boolean;
  results: MovieType [];
  handleClick: (id: string, title: string) => void;
  handleClose: () => void;
}

type SearchListItemType = {
  active: boolean;
}

const SearchResultsList = styled.ul`
  list-style: none;
  padding: 6px;
`;

SearchResultsList.displayName = 'SearchResultsList';

const SearchListItem = styled.li<SearchListItemType>`
  background: ${props => props.active ? props.theme.color3 : props.theme.color2 };
  border-radius: 5px;
  padding: 6px;
  cursor: ${props => props.active ? 'pointer' : 'default' };
`;

SearchListItem.displayName = 'SearchListItem';

export const SearchInputResults = ( { loading, results, handleClick, handleClose }: SearchInputResultsProps ) => {
  const down = useKeyPress('ArrowDown');
  const up = useKeyPress('ArrowUp');
  const enter = useKeyPress('Enter');
  const esc = useKeyPress('Escape');
  const [ cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState<number | undefined>();

  useEffect(() => {
    if(results && down) {
      setCursor(prevState =>
        prevState < results.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [down])

  useEffect(() => {
    if (results && up) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [up]);

  useEffect(() => {
    if (results && enter) {
      const { id, title } = results[cursor];
      handleClick(id, title);
    }
  }, [cursor, enter]);

  useEffect(() => {
    if (results && hovered !== undefined) {
      setCursor(hovered);
    }
  }, [hovered]);

  useEffect(() => {
    if (results && esc) {
      handleClose();
    }
  }, [esc]);

  if (loading) return <>Loading...</>;

  return (
      <SearchResultsList>
        {results.map((item, idx) => {
          return  (
            <SearchListItem
              active={idx === cursor}
              role="link"
              onClick={() => handleClick(item.id, item.title)}
              key={item.id}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(undefined)}
            >
            {item.title}
          </SearchListItem>)
        })}
      </SearchResultsList>
  );
};

