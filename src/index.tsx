import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { client } from './apollo/client';
import { theme} from "./styles/theme";

// components
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Toast } from './components/Toast/Toast';
import { ToastPortal } from './components/Toast/ToastPortal';

// routes
import { Routes } from "./routes/Routes";

// styles
import { GlobalStyle } from './styles';

const ContentContainer = styled.main`
  width: ${props => props.theme.contentWidth}px;
  margin: 16px auto 10px auto;
  flex: 1;
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
            <ToastPortal>
              <Toast
                toastType="danger"
                title="Error"
                message="Very long message This is a message that is very long"
              />
            </ToastPortal>
        </ThemeProvider>
    </ApolloProvider>
  </Router>
  );

  render(<App />, document.getElementById('root'));
