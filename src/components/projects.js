import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    background-color: var(--dark-navy);
`

const StyledFakeProject = styled.div`
    .project-bg {
        position: inherit !important;

        img {
            width: 100% !important;
            height: 100% !important;
            transition: all 500ms var(--easing) !important;
        }
    }

    .project {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        &:hover {
            transform: scale(1.1);
            opacity: 0.7;
            -webkit-transition: all 100ms var(--easing);
            -moz-transition: all 100ms var(--easing);
            -o-transition: all 100ms var(--easing);
            transition: all 100ms var(--easing);
        }

        .details {
            z-index: 1000;
            *:not(.title) {
                display: none;
            }
        }

        .title {
            
        }
    }

    background-color: var(--dark-navy);
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: all 500ms var(--easing);
    
    z-index: 99;
    &.expand-left, &.expand-right {
        width: 200%;
        height: 200%;

        box-shadow: 0 0 32px var(--dark-navy);

        .project {
            opacity: 1;
            &:hover {
                transform: none;
            }

            .title {
                transform: translate(25%, 25%);
            }
        }

        &:nth-child(odd) img {
            transform: scale(0.5) translate(-50%, -50%);
            height: 200% !important;
        }
        &:nth-child(even) img {
            transform: scale(0.5) translate(-50%, -50%);
            height: 200% !important;
        }
    }

    &.expand-right {
        margin-left: -100%;
    }

    position: relative;
    bottom: 0;
    &.expand-bottom {
        bottom: 100%;
    }

    cursor: pointer;
`

const Projects = () => {
    const [selected, setSelected] = useState(null);

    const handleExpandProject = (id) => {
        const container = document.getElementById(id);
        const className = "expand-" + (parseInt(container.id)%2 === 0 ? "left" : "right");
        if (container.classList.contains(className)) {
            container.classList.remove(className);
            container.classList.remove("expand-right");
            container.classList.remove("expand-bottom");
            setTimeout(() => container.style.zIndex = 99, 300);
            setSelected(null);
        } else {
            if (selected) {
                const selectedElement = document.getElementById(selected);
                const selectedClassName = "expand-" + (parseInt(selectedElement.id)%2 === 0 ? "left" : "right");
                selectedElement.classList.remove(selectedClassName);
                selectedElement.classList.remove("expand-right");
                selectedElement.classList.remove("expand-bottom");
                setTimeout(() => selectedElement.style.zIndex = 99, 300);
            }
            setTimeout(() => {
                container.classList.add(className);
                if (parseInt(container.id) >= 2) {
                    container.classList.add("expand-bottom");
                }
                container.style.zIndex = 999;
                setSelected(container.id);
                console.log(container.id)
            }, selected ? 200 : 0);
            
        }
    }

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "bivouac.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <StyledContainer id="projects">
            {[...Array(6)].map((_, idx) => (
                <StyledFakeProject key={idx} id={idx} onClick={() => handleExpandProject(idx)}> {/*style={{ filter: selected !== null ? (selected !== String(idx) ? "blur(2px)" : "none") : "none" }}>*/}
                    <div className="project">
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="project" className="project-bg" />
                        <div className="details">
                            <h3 className="title">Project</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus vitae lacus et lobortis. Nunc vitae aliquam ligula. Vestibulum feugiat, turpis vitae sagittis dictum, risus magna pulvinar risus, ut convallis purus libero non justo.</p>
                        </div>
                    </div>
                </StyledFakeProject>
            ))}
        </StyledContainer>
    )
}

export default Projects;