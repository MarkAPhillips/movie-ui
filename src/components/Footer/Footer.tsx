import React from 'react';
import styled from "styled-components";

// styles
const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 20px 0 36px;
  background: ${props => props.theme.color1};
`;

const Content = styled.div`
  width: ${props => props.theme.contentWidth}px;
  color: ${props => props.theme.color2};
  font-size: ${props => props.theme.size11};
`;

export const Footer = () => {

  return (
    <Container>
      <Content>
        &copy;2020 A Team Production
      </Content>
    </Container>
  )
};
