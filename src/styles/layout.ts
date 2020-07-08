import styled from 'styled-components';
import { rounded } from './mixins';

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-bottom: 1px;
  padding-left: 10px;
  ${rounded}
  background: ${props => props.theme.colorNeptune};
  color: ${props => props.theme.colorWhite};
`;
