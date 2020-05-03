import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";
// queries
import { GET_TRENDING } from '../../queries';

// types
import { TrendingMovieItem } from '../../types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Tile = styled.div`
  flex: none;
  position: relative;
  border: 1px solid gray;
  width: 154px;
  height: 231px;
  overflow: hidden;
  margin-right: 5px;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Blurb = styled.div`
  position: absolute;
  color: white;
  top: 0;
  left: 0;
`;

export const TrendingMoviesList = () => {

    const { loading, error, data } = useQuery(GET_TRENDING);

    if (loading) return <>Loading...</>;
    if (error) return <>`Error! ${error.message}`</>;

    return (
        <>
            <div>TRENDING MOVIES</div>
            <Container>
                {
                    data.trending.map((movie: TrendingMovieItem)=>{
                        return (

                                <Tile key={movie.id} data-testid={`trending-${movie.id}`}>
                                    <Image>
                                        <img src={movie.imageUrl} width='154px' height='231px' />
                                    </Image>
                                    <Blurb>
                                        {movie.id}: {movie.title} - {movie.overview}
                                    </Blurb>

                                </Tile>
                        );
                    })
                }
            </Container>
        </>
    )
};