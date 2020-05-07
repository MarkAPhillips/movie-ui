import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// queries
import { GET_POPULAR } from '../../queries';

// types
import { MovieType } from '../../types';

// components
import { MoviePanel } from "../MoviePanel/MoviePanel";

// styles
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const PopularMoviesList= () => {
    const history = useHistory();
    const { loading, error, data } = useQuery(GET_POPULAR);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

  const handleClick = () => {
    history.push('/trending');
  }

  return (
    <>
      <div>POPULAR MOVIES</div>
      <Container>
        {
          data.popular && data.popular.map((movie: MovieType) => (
            <MoviePanel movieData={movie} key={movie.id}/>
          ))
        }
      </Container>
      <button onClick={()=>handleClick()}>go to trending</button>
    </>
  )
};
