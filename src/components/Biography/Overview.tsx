/* eslint-disable no-bitwise */
/* eslint-disable react/no-array-index-key */
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggle } from '../../hooks/useToggle';

const BIO_HEIGHT = 226;

type OverviewProps = {
  bio?: string;
  name: string;
}

type ToggleProps = {
  isToggled: boolean;
}

const OverviewContainer = styled.div<ToggleProps>`
  max-height: ${(props) => (props.isToggled ? '100%' : `${BIO_HEIGHT}px`)};
  position: relative;
  overflow: hidden;
  padding-bottom: 8px;
`;

const ReadMoreText = styled.div`
  padding-right: 8px;
  font-size: 12px;
`;

const ReadMoreLink = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background:transparent;
  color: ${(props) => props.theme.colorBlack};
  padding: 8px;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;

const OverviewFade = styled.div<ToggleProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px 0 2px 0;
  height: 110px;
  background-image: ${(props) => (props.isToggled ? 'none' : `-webkit-gradient(
    linear, left top, left bottom, to(rgba(255, 255, 255, 1)), from(rgba(0, 0, 0, 0)))`)};
`;

export const Overview = ({ bio, name }: OverviewProps) => {
  const overViewRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showReadMore, setShowReadMore] = useState(false);
  const [isToggled, toggle] = useToggle(false);
  const icon = isToggled ? faAngleUp : faAngleDown;
  const text = isToggled ? 'show less' : 'show more';
  useLayoutEffect(() => {
    if (overViewRef && overViewRef.current) {
      const height = overViewRef.current.clientHeight;
      if (height > BIO_HEIGHT) {
        setShowReadMore(true);
      }
    }
  }, []);

  if (!bio) {
    return (
      <>
        No Biography has been created yet for
        {name}
      </>
    );
  }

  return (
    <>
      <OverviewContainer ref={overViewRef} isToggled={isToggled}>
        {~bio.indexOf('\n')
          ? bio.replace('\n\n', '\n')
            .split('\n').map((item, idx) => <p key={idx}>{item}</p>) : bio}
        {showReadMore && (<OverviewFade isToggled={isToggled} />)}
      </OverviewContainer>
      {showReadMore && (
      <ReadMoreLink role="link" onClick={toggle}>
        <ReadMoreText>{text}</ReadMoreText>
        <FontAwesomeIcon icon={icon} />
      </ReadMoreLink>
      )}
    </>
  );
};
