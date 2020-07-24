import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FEATURED } from '../../apollo/queries';
import { Title } from '../../styles/layout';
import { Movie } from '..';

export const FeaturedMovie = () => {
  const { loading, error, data } = useQuery(GET_FEATURED);
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  const { featured }= data;
  return (
    <>
      <Title>Featured</Title>
      <br />
      <Movie movie={featured} />
    </>
  );

};
