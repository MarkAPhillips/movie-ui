import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GET_BIO } from '../../apollo/queries';
import { ApolloData } from '../../apollo/types';
import { PersonType } from '../../types';
import { SummaryCard } from '../SummaryCard/SummaryCard';
import { PersonStrapline } from './PersonStrapline';
import { Overview } from './Overview';
import { MovieCreditsTimeline } from '../MovieCreditsTimeline/MovieCreditsTimeline';

const PersonTitle = styled.h2``;

const PersonHeader = styled.div`
  margin-bottom: 16px;
  align-items: center;
`;

export const Biography = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BIO, {
    variables: { id: +id},
  }) as ApolloData<PersonType>;
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { person } = data;
  return (
    <>
      <SummaryCard backDropImage={person.imageUrl} posterImage={person.imageUrl} imageType="person">
        <PersonHeader>
            <PersonTitle>{person.name}</PersonTitle>
            <PersonStrapline person={person} /><br />
            { person.placeOfBirth ? <><strong>Place of Birth: </strong> {person.placeOfBirth}</>: null}
          </PersonHeader>
          <strong>Biography</strong><br/>
          <Overview bio={person.biography} name={person.name} /><br/><br/>
      </SummaryCard>
      <MovieCreditsTimeline credits={person.credits} />
    </>
  )
};
