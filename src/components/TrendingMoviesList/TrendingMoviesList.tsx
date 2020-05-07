import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// queries
import { GET_TRENDING } from '../../queries';

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

export const TrendingMoviesList = () => {
    const history = useHistory();
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
                    data.trending && data.trending.map((movie: MovieType) => (
                        <MoviePanel movieData={movie} key={movie.id}/>
                    ))
                }
            </Container>
          <button onClick={()=>handleClick()}>go to popular</button>
        </>
    )
};
