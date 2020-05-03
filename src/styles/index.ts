import { createGlobalStyle } from 'styled-components'

const fonts = { size: '14px', family: 'Open Sans' };

import externalFont from './OpenSans-Regular-webfont.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${fonts.family};
        src: url(${externalFont})
    }
    html, body  {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    body {
        font-family: ${fonts.family};
        padding: 0;
        font-weight: normal;
        background-color:#fff;
        color:#000;
        font-size:${fonts.size};
  }
`