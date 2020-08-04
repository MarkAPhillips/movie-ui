import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { rounded } from '../../styles/mixins';

export const FormPanel = styled.div`
  border: 1px solid ${(props) => props.theme.colorNeptune};
  ${rounded}
  margin-top: 16px;
  > form {
    padding: 16px;
    width: 60%
  }
`;

const menuItem = css`
  width: 105px;
  text-align: right;
`;

const menuItemLink = css`
  ${menuItem}
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  &:hover {
    opacity: 0.7;
  }
`;

export const AuthMenuItemLink = styled.div`
  ${menuItemLink}
`;

export const AuthMenuItemRouterLink = styled(Link)`
  ${menuItemLink}
`;

export const AuthMenuUserProfile = styled.div`
  ${menuItem}
  span {
    display: inline-block;
    padding-left: 6px;
  }
`;
