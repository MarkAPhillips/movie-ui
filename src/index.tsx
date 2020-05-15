import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { client } from './client';
import { theme} from "./styles/theme";

// components
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

// routes
import { Routes } from "./routes/Routes";

// styles
import { GlobalStyle } from './styles';

const ContentContainer = styled.div`
  width: ${props => props.theme.contentWidth}px;
  margin: 10px auto 10px auto;
`;

const App = () => (
  <Router>
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavBar />
            <ContentContainer>
              <Routes />
            </ContentContainer>
            <Footer />
        </ThemeProvider>
    </ApolloProvider>
  </Router>
  );

  render(<App />, document.getElementById('root'));
