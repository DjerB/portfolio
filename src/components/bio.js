import React, { Fragment, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import styled from 'styled-components';
import anime from 'animejs';

import { FaReact, FaJs, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { RiGatsbyLine } from 'react-icons/ri';
import { DiMongodb, DiCss3 } from 'react-icons/di';
import { SiTensorflow, SiPytorch, SiFlask, SiApollographql, SiGraphql, SiDocker, SiMicrosoftazure } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';

import { LOADER_DELAY } from '@utils';

const skills = [
    FaReact, 
    FaJs, 
    FaJava, 
    FaPython, 
    RiGatsbyLine,
    SiGraphql,
    SiApollographql,
    SiDocker,
    FaAws,
    SiMicrosoftazure,
    DiMongodb,
    SiFlask,
    DiCss3, 
    AiOutlineHtml5, 
    SiTensorflow, 
    SiPytorch
];

const StyledDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--dark-navy);
    font-size: var(--fz-lg);

    h4 {
        font-weight: 100 !important;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    .media-wrapper {
        height: 50%;
    }
`

const StyledDetailsBio = styled.div`
    background-color: var(--white);
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }
`

const StyledDetailsSkills = styled.div`
    background-color: var(--dark-navy);
    height: 100vh;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }

    .skills {
        background-color: var(--white);
        height: 50%;
    }
`

const StyledSkillsContainer = styled.div`
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    width: 100%;
    overflow: hidden;
    column-gap: 40px;
    row-gap: 40px;

    @media screen and (min-width: 1000px) {
        grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1400px) {
        grid-template-columns:  1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
    }

    &:before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    & > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    svg {
        width: 100%;
        height: 100%;
        color: var(--space);
    }

    svg:hover {
        color: var(--space-green);
    }
`
//calc(72.2% - 40px);
const StyledScrollIconContainer = styled.div`
    position: absolute;
    bottom: 1%;
    left: calc(72.2% - 40px);
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: var(--space-green);
        font-weight: 100;
    }
`

const ScrollIcon = () => (
    <svg width="32.75" height="60" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="halfStroke" x1="1" y1="0" x2="0" y2="0">
            <stop id="stop1" offset="50%" stopColor="#FFFFFF"/>
            <stop id="stop2" offset="0%" stopColor="#192A2D"/>
        </linearGradient>
    </defs>
    <g>
        <title>Layer 1</title>
        <rect rx="14" x="2.5" y="5" id="big" height="50" width="28.75"  strokeWidth="2" stroke="#192A2D" fill="#FFFFFF"/>
        <rect stroke="#192A2D" x="14" y="30" rx="3" id="small" height="10" width="6.3"  strokeOpacity="null" strokeWidth="1" fill="#FFFFFF"/>
    </g>
    </svg>
)

const Bio = ({ isMounted, showScroll }) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    useEffect(() => {
        if (isMounted) {
            var bounceUp = anime({
                autoplay: false, 
                targets:  '#small', 
                translateY: {
                value:    ['6px', '0px'], 
                  duration: 400,
                  easing:   'easeOutQuad',
                },
                complete:  function(){ bounceDown.restart() }, 
            });
              
            var bounceDown = anime({
                autoplay: false,  
                targets:  '#small',
                translateY: {
                  value:    ['0px', '6px'], 
                  duration: 400,
                  easing:   'easeInQuad',
                },
                complete:  function(){ bounceUp.restart() }, 
            });
              
            bounceUp.play(); 
        }
    }, {isMounted})

    return (
        <StyledDetailsContainer id="about">
            <TransitionGroup component={null}>
                {isMounted && <CSSTransition classNames="translate-down" timeout={LOADER_DELAY}>
                    <StyledDetailsBio style={{ transitionDelay: `${4 + 1}00ms` }}>
                        <div className="media-wrapper">
                            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Avatar" className="img" />
                        </div>
                        <div className="flex-column-center">
                            <h4>Hello! I am a software/ML engineer based in London, UK specialising in building incredible web apps using the latest technologies. I am passionate about creating efficient and human centered applications by putting the user experience at the core.</h4>
                        </div>
                    </StyledDetailsBio>
                </CSSTransition>}
                {isMounted && <CSSTransition classNames="translate-up" timeout={LOADER_DELAY}>
                    <StyledDetailsSkills style={{ transitionDelay: `${4 + 1}00ms` }}>
                        <div className="flex-column-center skills">
                            <h4>Shortly after graduating from <span className="highlighted">Ecole Centrale Paris</span>, 
                                I joined the engineering teams at <span className="highlighted">Grabyo</span> and <span className="highlighted">BNP Paribas</span> successively to contribute to delivering awesome web apps. I also work as a freelance developer
                                for companies and undertake whole projects from mock-up design to production. Recently graduated from <span className="highlighted">Imperial College London</span>, I am now open to exciting opportunities.</h4>
                            <h4>Here are some technologies I've been working with recently: </h4>
                        </div>
                        <div className="media-wrapper flex-column">
                            <StyledSkillsContainer>
                                {skills.map((Icon, idx) => (
                                    <div key={idx}>
                                        <Icon /> 
                                    </div>
                                ))}
                            </StyledSkillsContainer>
                        </div>
                    </StyledDetailsSkills>
                </CSSTransition>}
                {isMounted && showScroll &&
                <CSSTransition classNames="fade" timeout={LOADER_DELAY}>
                    <StyledScrollIconContainer>
                        <ScrollIcon />
                        <span>SCROLL</span>
                    </StyledScrollIconContainer>
                </CSSTransition>}
            </TransitionGroup>
        </StyledDetailsContainer>
    );
}

export default Bio;