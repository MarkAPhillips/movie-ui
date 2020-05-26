import React from 'react';
import {useHistory, useParams} from 'react-router-dom';

type BiographyProps = {
  bioId?: number;
};

export const Biography = ({ bioId }: BiographyProps) => {

  if (!bioId ) {
    const { id } = useParams();
    bioId = +id;
  }

  return (
    <div>Biography id: {bioId}</div>
  )
};
