import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
  /* Translate Down */
  .translate-down-enter {
    opacity: 0.01;
    transform: translateY(-100%);
  }
  .translate-down-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: opacity 1500ms var(--easing), transform 1000ms var(--easing);
  }
  /* Translate Up */
  .translate-up-enter {
    opacity: 0.01;
    transform: translateY(100%);
  }
  .translate-up-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: opacity 1500ms var(--easing), transform 1000ms var(--easing);
  }
`;

export default TransitionStyles;