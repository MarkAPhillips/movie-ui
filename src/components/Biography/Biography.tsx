import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_BIO } from '../../apollo/queries';
import { ApolloData } from '../../apollo/types';
import { PersonType } from '../../types';
import { SummaryCard } from '../SummaryCard/SummaryCard';
import { formatDate } from '../../utilities';

const PersonTitle = styled.h2``;

const PersonHeader = styled.div`
  margin-bottom: 16px;
  align-items: center;
`;

const getBio = (bio?: string) => {
  if (!bio) return 'Awaiting content.';
  return (~bio.indexOf('\n')) ?
    bio.replace('\n\n', '\n')
      .split('\n').map((text, idx) => <p key={idx}>{text}</p>) : bio;
};

export const Biography = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BIO, {
    variables: { id: +id},
  }) as ApolloData<PersonType>;
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  const { person } = data;
  return (
    <SummaryCard imageUrl={person.imageUrl} imageType="person">
      <PersonHeader>
          <PersonTitle>{person.name}</PersonTitle>
          <strong>DOB:</strong> {formatDate(person.birthDate || '')} - {person.placeOfBirth}
        </PersonHeader>
        <strong>Biography</strong><br/>
        {getBio(person.biography)}<br/><br/>
    </SummaryCard>
  )
};
