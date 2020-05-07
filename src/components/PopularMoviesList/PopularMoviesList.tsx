import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";

// queries
import { GET_POPULAR } from '../../queries';

// types
import { PopularMovieItem } from '../../types';


export const PopularMoviesList= () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(GET_POPULAR);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

  const handleClick = () => {
    history.push('/trending');
  }

    return (
        <>
            <div>POPULAR MOVIES</div>
            <button onClick={()=>handleClick()}>go to trending</button>
            <ul>
            {
                data.popular.map((movie: PopularMovieItem)=> (
                    <li key={movie.id} data-testid={`popular-${movie.id}`}>
                        {movie.id} ({movie.voteAverage}): {movie.title} - {movie.overview} <br/>
                    <div>
                        <img src={movie.imageUrl} width='154px' height='231px' />
                    </div>
                    </li>
            ))
            }
            </ul>
        </>
    )
};
