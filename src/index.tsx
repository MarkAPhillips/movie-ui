import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { client } from './apollo/client';
import { theme } from "./styles/theme";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from './styles';
import { NavBar, Footer, Notification } from './components'

const ContentContainer = styled.main`
  width: ${props => props.theme.contentWidth}px;
  margin: 16px auto 10px auto;
  flex: 1;
`;

const App = () => (<Router>
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <ContentContainer>
        <Routes />
      </ContentContainer>
      <Footer />
    </ThemeProvider>
    <Notification />
  </ApolloProvider>
</Router>
);

render(<App />, document.getElementById('root'));
