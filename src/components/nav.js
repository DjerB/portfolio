import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { LOADER_DELAY } from '@utils';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    background-color: var(--dark-navy);
    width: 40vw;
`

const StyledNav = styled.nav`
    width: 90%;
    padding-top: 3%;

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        text-decoration: none;
    }
    
    a {
        text-decoration: none;
        color: var(--slate);
        font-weight: 100;

        &:hover, &:focus, &:active {
            color: var(--space);
        }
    }

    .selected {
        color: var(--space);
        font-weight: 600;
    }
`

const Nav = ({ current, handlePageChange }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsMounted(true);
        }, 100);
    
        return () => {
          clearTimeout(timeout);
        };
    }, []);

    return (
        <StyledHeader>
            <StyledNav>
                <ul>
                    <TransitionGroup component={null}>
                        {isMounted &&
                        navLinks &&
                        navLinks.map(({ url, name }, idx) => (
                            <CSSTransition key={idx} classNames="fadedown" timeout={LOADER_DELAY}>
                                <li key={idx} style={{ transitionDelay: `${idx * 100}ms` }}>
                                    <Link onClick={() => handlePageChange(url)} className={current === url ? "selected" : ""} to={url}>{name.toUpperCase()}</Link>
                                </li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </StyledNav>
        </StyledHeader>
    );
}

export default Nav;