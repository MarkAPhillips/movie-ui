import styled from 'styled-components';
import { rounded, button } from './mixins';

export const Button = styled.button`
  ${button}
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  ${button}
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.7' : '')};
`;

export const Input = styled.input`
  margin: 0.5em;
  padding: 0.7em;
  ${rounded}
  border: 1px solid ${(props) => props.theme.colorAquaSpring};
  width: 100%;
`;
