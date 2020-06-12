import React from 'react';
import { PersonType } from '../../types';
import { formatDate } from '../../utilities';

type PersonStraplineProps = {
  person: PersonType;
}

export const PersonStrapline = ( { person }: PersonStraplineProps) => {
  const { age, birthDate, deathDate } = person;
  if (birthDate && deathDate) {
    return <><strong>{formatDate(birthDate)} - {formatDate(deathDate)}</strong> ({age} yrs)</>;
  }
  if (birthDate) {
    return  <><strong>DOB: </strong>{formatDate(birthDate)} ({age} yrs)</>;
  }
  if(!birthDate && deathDate) {
    return <><strong>Death: </strong>{formatDate(deathDate)}`</>;
  }
  return null;
}
