import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// queries
import { GET_TRENDING } from '../../queries';

// types
import { TrendingMovieItem } from '../../types';

export const TrendingMoviesList = () => {

    const { loading, error, data } = useQuery(GET_TRENDING);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

    return (
        <>
            <div>TRENDING MOVIES</div>
            <ul>
            {
                data.trending.map((movie: TrendingMovieItem)=>{
                    return <li key={movie.id} data-testid={`trending-${movie.id}`}>{movie.id}: {movie.title} - {movie.overview}</li>;
                })
            }
            </ul>
        </>
    )
};