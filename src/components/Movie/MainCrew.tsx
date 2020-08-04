import React from 'react';
import styled from 'styled-components';

// types
import { CrewType } from '../../types';

// styles
const MainCrewPanel = styled.div`
  span {
    &:first-child {
      display: inline-block;
      font-weight: 600;
      padding-right: 8px;
    }
  }
`;

type MainCrewProps = {
  crew: CrewType [];
}

/** Main crew currently only consists of crew with job Director */
export const MainCrew = ({ crew }: MainCrewProps) => {
  const mainCrew = crew.filter((item) => item.job === 'Director');
  const output = mainCrew.length ? mainCrew.map((item) => (
    <MainCrewPanel key={item.id}>
      <span>{item.job}</span>
      <span>{item.name}</span>
    </MainCrewPanel>
  )) : null;
  return (<>{output}</>);
};
