import styled from 'styled-components';
import { rounded } from '../../styles/mixins';

export const FormPanel = styled.div`
  border: 1px solid ${props => props.theme.colorNeptune};
  ${rounded}
  margin-top: 16px;
  > form {
    padding: 16px;
    width: 60%
  }
`;

const AuthMenuItem = styled.div`
  width: 105px;
  text-align: right;
`;

export const AuthMenuItemLink = styled(AuthMenuItem)`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const AuthMenuUserProfile  = styled(AuthMenuItem)`
  span {
    display: inline-block;
    padding-left: 6px;
  }
`;
