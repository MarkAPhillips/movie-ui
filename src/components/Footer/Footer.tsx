import React from 'react';
import styled from 'styled-components';

// styles
const FooterPanel = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 8px 16px;
  background: ${props => props.theme.color1};
`;

const FooterContentPanel = styled.div`
  width: ${props => props.theme.contentWidth}px;
  margin: 10px auto 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    &: last-child {
      text-align: right;
    }
  }
`;

const Content = styled.div`
  width: ${props => props.theme.contentWidth}px;
  color: ${props => props.theme.color2};
  font-size: ${props => props.theme.size11};
`;

export const Footer = () => (
  <FooterPanel>
    <FooterContentPanel>
      <Content>
        &copy;2020 A Team Production
      </Content>
      <Content>
        v.{window._env_.VERSION}
      </Content>
    </FooterContentPanel>
  </FooterPanel>
);
