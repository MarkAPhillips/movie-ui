import React from 'react';
import { useQuery } from '@apollo/react-hooks';

// queries
import { GET_TRENDING } from '../../queries';

// types
import { MovieType } from '../../types';

// components
import { MoviePanel } from "../MoviePanel/MoviePanel";
import { Carousel } from "../Carousel/Carousel";

export const TrendingMoviesList = () => {
    const { loading, error, data } = useQuery(GET_TRENDING);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

    return (
        <Carousel title={'TRENDING MOVIES'}>
            {
                data.trending && data.trending.map((movie: MovieType) => (
                    <MoviePanel movieData={movie} key={movie.id}/>
                ))
            }
        </Carousel>
    )
};
