import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';

const fonts = { size: '14px', family: 'Open Sans' };

import OpenSansRegular from './OpenSans-Regular-webfont.woff';
import OpenSansBold from './open-sans-v17-latin-700.woff';

/** CSS files for react-slick */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
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
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    body {
        min-height: 100vh;
        font-family: ${fonts.family};
        padding: 0;
        font-weight: normal;
        background-color:#fff;
        color:#000;
        font-size:${fonts.size};
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  /** Override react slick css **/
  .slick-dots li button:before {
    color: ${theme.colorNeptune} !important;
  }

  .slick-dots li.slick-active button:before {
    color:${theme.colorNeptune} !important;
}
`
