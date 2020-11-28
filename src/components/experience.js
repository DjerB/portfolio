import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--white);
    color: var(--white);
    font-size: var(--fz-lg);
    height: 100vh;
`

const StyledLeft = styled.div`
`

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledTabs = styled.div`
    height: 50%;
    background-color: var(--dark-navy);
`

const Experience = () => {
    /* const data = useStaticQuery(graphql`
        query {
            jobs: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/jobs/" } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                node {
                    frontmatter {
                        title
                        company
                        location
                        range
                        url
                    }
                    html
                }
                }
            }
        }
    `) */

    //console.log(data)
    return (
        <StyledContainer id="jobs">
            <StyledLeft>

            </StyledLeft>
            <StyledRight>
                <StyledTabs>

                </StyledTabs>
            </StyledRight>
        </StyledContainer>
    )
}

export default Experience;