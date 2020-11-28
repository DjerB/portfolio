import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${Fonts};

  :root {
    --dark-navy: #192A2D;
    --navy: #0a192f;
    --ecru: #E2E2E2;
    --white: #FFFFFF;
    --space: #d4e8e4;
    --space-green: #a8e0d5;
    --light-gray: #E2E2E2;
    --slate: #888b93;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --fz-big-heading: 64px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    background-color: var(--dark-navy);
  }

  .layout-padding {
    padding: 4% 5%;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  .flex-column-center {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    padding: 6% 10%;
  }

  .flex-column {
    flex-direction: column;
    padding: 6% 10%;
  }

  .text-center {
    text-align: center;
  }

  .text-ecru {
    color: var(--ecru);
  }

  .text-dark-navy {
    color: var(--dark-navy);
  }

  .text-white {
    color: var(--white);
  }

  .highlighted {
    color: var(--slate);
    font-weight: 600;
  }

  ${TransitionStyles};
`;

export default GlobalStyle;