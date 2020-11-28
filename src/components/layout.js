/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, navigate } from 'gatsby';

import { GlobalStyle, theme } from '@styles';
import styled from 'styled-components';
import { ThemeProvider } from "styled-components";
import { Loader, Hero, Bio, Nav, Socials, Experience, Projects, Contact } from '@components';

import { LOADER_DELAY, NAV_DELAY } from '@utils';
import { navLinks } from '@config';

const Styledlayout = styled.section`
	display: grid;
	grid-template-columns: 4fr 5fr;
	width: 100vw;
	height: 100vh;
	overflow: hidden;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    p {
        color: var(--ecru);
    }
`

const StyledScrollablePanel = styled.div`
	max-height: 100vh;
	overflow-y: scroll;
	background-color: var(--dark-navy);
`

const Layout = ({ children, location }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentTab, setCurrentTab] = useState("#about");
	const [isMounted, setIsMounted] = useState(false);
	const [showScroll, setShowScroll] = useState(false);
	
    useEffect(() => {
		if (!isLoading) {
			
			// SCROLL TIMER
			const timeoutScroll = setTimeout(() => {
				setShowScroll(true);
				const disableScroll = () => {
					setShowScroll(false);
					document.getElementById("scrollable-panel").removeEventListener("scroll", disableScroll);
				}
				document.getElementById("scrollable-panel").addEventListener("scroll", disableScroll);
			}, NAV_DELAY + 1700);

			const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);

			// CONTACT SLIDER
			/* document.getElementById("scrollable-panel").addEventListener('scroll', ({ target: panel }) => {
				const globalHeight = window.innerHeight;
				if (panel.scrollTop + globalHeight === panel.scrollHeight) {
					console.log("bottom")
					document.getElementById("hero").classList.add("expand");
				}
			}) */
			
			// SCROLLABLE PANEL TIMER
			var timer = null;
			document.getElementById("scrollable-panel").addEventListener('scroll', function() {
				/* console.log( window.innerHeight, document.getElementById("scrollable-panel").scrollTop)
				const globalHeight = window.innerHeight;
				const offsetY = document.getElementById("scrollable-panel").scrollTop;
				if (offsetY >= globalHeight * 2) {
					const percentage = 100 * (offsetY%globalHeight) / globalHeight;
					console.log(percentage)
					document.getElementById("contact").style.background = `linear-gradient(90deg, var(--dark-navy) ${percentage}%, var(--white) ${100 - percentage}%)`
				} */
				if(timer !== null) {
					clearTimeout(timer);        
				}
				timer = setTimeout(function() {
					const globalHeight = window.innerHeight;
					const offsetY = document.getElementById("scrollable-panel").scrollTop;
				
					let nextSection = offsetY%globalHeight > globalHeight/2;
					const sectionIndex = parseInt(offsetY/globalHeight) + (nextSection ? 1 : 0);
					const newSection = document.getElementById(navLinks[sectionIndex].url.substring(1));
					navigate(navLinks[sectionIndex].url);
					setCurrentTab(navLinks[sectionIndex].url);
					newSection.scrollIntoView({
						behavior: 'smooth'
					});
					/* const isSafari = navigator.userAgent.indexOf("Safari") != -1;
					const isIE = (navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true );
					const isEdge = !isIE && !!window.StyleMedia;
					if (isSafari || isIE || isEdge) {
						function SmoothVerticalScrolling(e, time, where) {
							var eTop = e.getBoundingClientRect().top;
							var eAmt = eTop / 100;
							var curTime = 0;
							while (curTime <= time) {
								window.setTimeout(SVS_B, curTime, eAmt, where);
								curTime += time / 100;
							}
						}
						
						function SVS_B(eAmt, where) {
							if(where == "center" || where == "")
								window.scrollBy(0, eAmt / 2);
							if (where == "top")
								window.scrollBy(0, eAmt);
						}

						SmoothVerticalScrolling(newSection, 275, "top");
					} */
					newSection.focus();
				}, 50);
			}, false);
        	return () => {
				clearTimeout(timeout);
				clearTimeout(timeoutScroll);
			};
		}
	}, [isLoading]);
	
	const handlePageChange = (name) => {
		setCurrentTab(name);
		const id = name.substring(1); // location.hash without the '#'
		setTimeout(() => {
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({
					behavior: 'smooth'
				});
				el.focus();
			}
		}, 0);
	}

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
				title
				}
			}
		}
	`)

	return (
		<>
			{/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					{isLoading ?
					<Loader finishLoading={() => setIsLoading(false)} />
					: <>
						<Nav current={currentTab} handlePageChange={handlePageChange}  />
						<Styledlayout id="layout">
							<Hero isMounted={isMounted} />
							<StyledScrollablePanel id="scrollable-panel">
								<Bio isMounted={isMounted} showScroll={showScroll} />
								{isMounted && <Experience />}
								{isMounted && <Projects />}
								{isMounted &&
								<div id="contact" style={{ position: "absolute", height: "100vh", width: "0" }}>

								</div>
								}
							</StyledScrollablePanel>
						</Styledlayout>
						<Socials />
					</>}
				</ThemeProvider>
			</div>
		</>
	);
}

/* Layout.propTypes = {
  	children: PropTypes.node.isRequired,
} */

export default Layout
