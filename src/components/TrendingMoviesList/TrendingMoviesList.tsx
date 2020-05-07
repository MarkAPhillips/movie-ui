import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// queries
import { GET_TRENDING } from '../../queries';

// types
import { TrendingMovieItem } from '../../types';

// components
import { MoviePanel } from "../MoviePanel/MoviePanel";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TrendingMoviesList = () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(GET_TRENDING);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

    const handleClick = () => {
      history.push('/popular');
    }

    return (
        <>
            <div>TRENDING MOVIES</div>
            <Container>
                {
                    data.trending && data.trending.map((movie: TrendingMovieItem) => (
                        <MoviePanel movieData={movie} key={movie.id}/>
                    ))
                }
            </Container>
          <button onClick={()=>handleClick()}>go to popular</button>
        </>
    )
};
