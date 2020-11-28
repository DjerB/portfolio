import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';

const IconLoaderB = () => (
    <svg id="logo" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <title>background</title>
            <rect fill="#fff" id="bg" height="102" width="102" y="-1" x="-1"/>
        </g>
        <g>
            <title>Layer 1</title>
            <rect id="rect" height="80" width="80" y="10" x="10" stroke-width="5" stroke="#000" fill="#fff"/>
            <text id="B" stroke="#000" transform="matrix(0.9239710987813865,0,0,1,9.20384112142963,0)" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="70" y="75" x="21" fill-opacity="null" stroke-opacity="null" stroke-width="0" fill="#000000">B</text>
        </g>
    </svg>
);

const IconLoaderBD = () => (
    <svg id="logo" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect fill="#fff" id="bg" height="102" width="102" y="-1" x="-1"/>
      </g>
      <g>
        <title>Layer 1</title>
        <rect id="rect" height="80" width="80" y="10" x="10.13889" strokeWidth="5" stroke="#000" fill="#fff"/>
        <text stroke="#000" transform="matrix(0.6660384493219479,0,0,0.8024321211089491,23.873943468401556,19.15336097580128) " textAnchor="start" fontFamily="Helvetica, Arial, sans-serif" fontSize="70" id="BD" y="63.36139" x="-9.02748" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">BD</text>
      </g>
    </svg>
)

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #BD {
        opacity: 0;
        fill: var(--space-green);
      }

      #rect, #bg {
        fill: var(--dark-navy);
        stroke: var(--space-green);
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(), 
    });

    loader
      .add({
        targets: '#logo rect',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #BD',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoaderBD />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;