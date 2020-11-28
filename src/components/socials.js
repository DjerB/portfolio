import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '@config';
import { Icon } from '@components';
import styled from 'styled-components';
import { LOADER_DELAY, NAV_DELAY } from '@utils';

const SocialsContainer = styled.ul`
    position: fixed;
    left: 2vw;
    bottom: 3vh;
    padding: 0;
    display: flex;
    list-style: none;
`

const SocialsIcon = styled.li`
    background-color: transparent; //var(--dark-navy);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 5px;
    margin-right: 5px;

    a {
        &:hover,
        &:focus {
            transform: translateY(-3px);
        }

        height: 100%;
        width: 100%;

        svg {
            color: var(--space-green);
            height: 100%;
            width: 100%;
        }
    }    
`

const Socials = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <SocialsContainer>
            <TransitionGroup component={null}>
                {isMounted && 
                socialMedia.map(({ url, name }, idx) => (
                    <CSSTransition key={idx} classNames="fade" timeout={LOADER_DELAY}>
                        <SocialsIcon style={{ transitionDelay: `${idx + 4}00ms` }}>
                            <a href={url} aria-label={name}>
                                <Icon name={name} />
                            </a>
                        </SocialsIcon>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </SocialsContainer>
    );
}

export default Socials;