import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface MovieItem { id: string; title: string; overview: string; vote_average: number };
interface Props {
    list:  Array<MovieItem>;
}

const GET_POPULAR = gql`
  {
    popular {
        id,
        title,
        overview,
        vote_average
      }
  }
`;

export const PopularMoviesList = () => {

    const { loading, error, data } = useQuery(GET_POPULAR);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <div>POPULAR MOVIES</div>
            <ul>
            {
                data.popular.map((movie)=>{
                    return <li key={movie.id} data-testid={`popular-${movie.id}`}>{movie.id}: {movie.title} - {movie.overview} - {movie.vote_average}</li>;
                })
            }
            </ul>
        </>
    )
};