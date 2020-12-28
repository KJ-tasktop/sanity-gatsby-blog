// import Icon from './icon'
// import { cn } from '../lib/helpers'

// import styles from './header.module.css'

import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavStyles = styled.nav`
	display: grid;
	grid-template-columns: 200px 400px 500px;
	gap: 50px;
	margin: 0;
	background-color: springgreen;
	border: 2px solid rebeccapurple;

	li {
		list-style: none;
		text-align: center;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #fff;

		&:hover {
			color: var(--yellow);
		}
	}

	.tt-logo {
		display: flex;
		width: 100%;
		grid-column-start: 1;
	}
`

const Logo = styled.div`
	width: 200px;
	height: 60px;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	background-image: url('https://www.tasktop.com/sites/all/themes/tasktop/tasktop-logo-dark.svg');
`

const LeftSideNav = styled.ul`
	display: flex;
	grid-column-start: 2;
	align-items: center;
	justify-content: space-around;
	margin: 0;
`

const RightSideNav = styled.ul`
	display: flex;
	grid-column-start: 3;
	align-items: center;
	justify-content: space-around;
	margin: 0;
`

const SecondaryNav = styled.div`
	background-color: var(--yellow);

	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	li {
		list-style: none;
		text-align: center;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #fff;

		&:hover {
			color: #000;
		}
	}
`

const Header = ({ showNav, siteTitle, scrolled, primaryNavMenu, secondaryNavMenu, textWhite = true }) => {
	// console.log('header.js - secondaryNavMenu: ', secondaryNavMenu)
	// console.log('header.js - primaryNavMenu: ', primaryNavMenu)

	const { left, right } = primaryNavMenu
	return (
		<>
			<NavStyles id="header">
				<div>
					<Link id="siteTitle" className="tt-logo" to="/">
						<Logo />
					</Link>
				</div>

				<LeftSideNav>
					{/* <p>Left Side</p> */}
					{left.map((leftSideNavItem) => (
						<li key={leftSideNavItem._key}>
							<Link to={`/${leftSideNavItem.landingPageRoute.slug.current}`}>
								{leftSideNavItem.title}
							</Link>
						</li>
					))}
				</LeftSideNav>
				<RightSideNav>
					{/* <p>Right Side</p> */}
					{right.map((rightSideNavItem) => (
						<li key={rightSideNavItem._key}>
							<Link to={`/${rightSideNavItem.landingPageRoute.slug.current}`}>
								{rightSideNavItem.title}
							</Link>
						</li>
					))}
				</RightSideNav>
			</NavStyles>

			{secondaryNavMenu && (
				<SecondaryNav>
					<ul>
						{secondaryNavMenu.map((secondaryNavMenuItem) => (
							<li key={secondaryNavMenuItem.landingPageRoute.id}>
								<Link to={`/${secondaryNavMenuItem.landingPageRoute.slug.current}`}>
									{secondaryNavMenuItem.landingPageRoute.title}
								</Link>
							</li>
						))}
					</ul>
				</SecondaryNav>
			)}
		</>
	)
}

export default Header
