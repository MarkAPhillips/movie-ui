import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from '../../hooks/useToggle';

const BIO_HEIGHT = 256;

type OverviewProps = {
  bio?: string;
  name: string;
}

type ToggleProps = {
  isToggled: boolean;
}

const OverviewContainer = styled.div<ToggleProps>`
  max-height: ${props => props.isToggled ? '100%' : `${BIO_HEIGHT}px`};
  position: relative;
  overflow: hidden;
  padding-bottom: 8px;
`;

const ReadMoreLink = styled.p<ToggleProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 20px 0 2px 0;
  background-image: ${props => props.isToggled ? 'none' : `-webkit-gradient(
    linear, left top, left bottom, to(rgba(255, 255, 255, 1)), from(rgba(0, 0, 0, 0)))`};
  font-size: 20px;
  color: ${props => props.theme.colorNeptune};
  svg {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const Overview = ({ bio, name }: OverviewProps) => {
  const overViewRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showReadMore, setShowReadMore] = useState(false);
  const [isToggled, toggle] = useToggle(false);
  const icon = isToggled ? faAngleUp : faAngleDown;
  useLayoutEffect(() => {
    if (overViewRef && overViewRef.current) {
      const height = overViewRef.current.clientHeight;
      if (height > BIO_HEIGHT) {
        setShowReadMore(true);
      }
    }
  }, []);

  if (!bio) return <>No Biography has been created yet for {name}</>;
  return (
    <OverviewContainer ref={overViewRef} isToggled={isToggled}>
      {~bio.indexOf('\n') ?
        bio.replace('\n\n', '\n')
          .split('\n').map((text, idx) => <p key={idx}>{text}</p>) : bio}
      {showReadMore && (
        <ReadMoreLink isToggled={isToggled}>
          <FontAwesomeIcon icon={icon} onClick={toggle} />
        </ReadMoreLink>
      )}
    </OverviewContainer>);
};
