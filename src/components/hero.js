import React, { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { LOADER_DELAY } from '@utils';
import { email } from '@config';

const StyledHeroTitle = styled.div`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: start;
    height: 100vh;
    background-color: var(--dark-navy);

    h3 {
        color: var(--space-green);
        margin: 0;
    }

    h1 {
        font-weight: 100;
        font-size: var(--fz-xxl);
        margin: 0;
        color: var(--slate);
    }

    .big-title {
        font-weight: 600;
        font-size: var(--fz-big-heading);
        color: var(--space)
    }

    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
        padding-bottom: 1rem;

        &:hover {
            transform: translateY(-10px);
        }
    }
`



const Hero = ({ isMounted }) => {
    const one = <h3 className="text-ecru">Hi, I'm</h3>
    const two = <h1 className="text-white big-title">Bachir Djermani</h1>
    const three = <h1 className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus vitae lacus et lobortis. Nunc vitae aliquam ligula. Vestibulum feugiat, turpis vitae sagittis dictum, risus magna pulvinar risus, ut convallis purus libero non justo.</h1>
    const four = (
        <a href={`mailto:${email}`} className="email-link">
          Get In Touch
        </a>
    );
    const items = [one, two, three, four];

    return (
        <StyledHeroTitle className="layout-padding" id="hero">
            <TransitionGroup component={null}>
                {isMounted && items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
                        <div style={{ transitionDelay: `${i + 1}00ms`, marginTop: i === 3 ? "40px" : "" }}>{item}</div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledHeroTitle>
    );
}

export default Hero;