import React from 'react';
import { ApolloError } from 'apollo-boost';

// types
import { MovieType } from '../../types';

// components
import { MovieTile } from "../MovieTile/MovieTile";
import { Carousel } from "../Carousel/Carousel";

type MovieListProps = {
  loading: boolean;
  error: ApolloError | undefined;
  movies: MovieType [];
  title: string;
};

export const MovieList = ( { loading, error, movies, title }: MovieListProps)=> {
    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;
    return (
        <Carousel title={title}>
            {
                movies && movies.map((movie: MovieType) => (
                    <MovieTile movieData={movie} key={movie.id}/>
                ))
            }
        </Carousel>
    )
};
