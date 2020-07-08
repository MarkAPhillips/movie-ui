import styled from 'styled-components';
import { rounded } from './mixins';

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  background: ${props => props.theme.colorNeptune};
  color: ${props => props.theme.colorWhite};
  border: 1px solid ${props => props.theme.colorNeptune};
  margin: 0.5em;
  padding: 0.7em;
  ${rounded}
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: 0.7;
  }
  opacity: ${props => (props.disabled ? '0.7' : '')};
`;

export const Input = styled.input`
  margin: 0.5em;
  padding: 0.7em;
  ${rounded}
  border: 1px solid ${props => props.theme.colorAquaSpring};
  width: 100%;
`;
