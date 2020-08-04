import { css } from 'styled-components';

export const rounded = css`
  border-radius: 5px;
`;

export const button = css`
  background: ${(props) => props.theme.colorNeptune};
  color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.colorNeptune};
  margin: 0.5em;
  padding: 0.7em;
  ${rounded}
  &:hover {
    opacity: 0.7;
  }
`;
