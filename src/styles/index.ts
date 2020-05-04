import { createGlobalStyle } from 'styled-components'

const fonts = { size: '14px', family: 'Open Sans' };

import OpenSansRegular from './OpenSans-Regular-webfont.woff';
import OpenSansBold from './open-sans-v17-latin-700.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-weight: 400;
        font-family: ${fonts.family};
        src: url(${OpenSansRegular})
    }
    @font-face {
        font-weight: 700;
        font-family: ${fonts.family};
        src: url(${OpenSansBold})
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