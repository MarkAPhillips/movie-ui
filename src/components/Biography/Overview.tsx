import React from 'react';

type OverviewProps = {
  bio? : string;
  name: string;
}

export const Overview = ({ bio, name }: OverviewProps ) => {
  if (!bio) return <>No Biography has been created yet for {name}</>;
  return (~bio.indexOf('\n')) ?
      <>
        {bio.replace('\n\n', '\n')
          .split('\n').map((text, idx) => <p key={idx}>{text}</p>)}
      </> : <>{bio}</>;
};
