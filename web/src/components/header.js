// import Icon from './icon'
// import { cn } from '../lib/helpers'

// import styles from './header.module.css'

import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
// import ContentWrapper from '../containers/contentWrapper'

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* height: 50px; */
	background-color: #fff;
`

const NavStyles = styled.div`
	display: grid;
	grid-template-columns: 150px 400px 300px;
	gap: 50px;
	margin: 0;

	li {
		list-style: none;
		text-align: center;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #000;

		&:hover,
		&.active {
			color: var(--green);
			border-bottom: 2px solid #000;
			padding-bottom: 14px;
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
	height: 50px;
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
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--grey);
	width: 100%;
	height: 40px;
`

const SecondaryNavStyles = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
	width: 950px;
	margin: 0;
	padding: 0;

	li {
		list-style: none;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #000;

		&:hover,
		&.active {
			color: var(--green);
		}
	}
`

const Header = ({ showNav, siteTitle, scrolled, primaryNavMenu, secondaryNavMenu, textWhite = true }) => {
	const { left, right } = primaryNavMenu
	return (
		<>
			<Nav id="header">
				<NavStyles>
					{/* <ContentWrapper> */}
					<div>
						<Link id="siteTitle" className="tt-logo" to="/">
							<Logo />
						</Link>
					</div>

					<LeftSideNav>
						{left.map((leftSideNavItem) => (
							<li key={leftSideNavItem._key}>
								<Link to={`/${leftSideNavItem.landingPageRoute.slug.current}`} activeClassName="active">
									{leftSideNavItem.title}
								</Link>
							</li>
						))}
					</LeftSideNav>
					<RightSideNav>
						{right.map((rightSideNavItem) => (
							<li key={rightSideNavItem._key}>
								<Link
									to={`/${rightSideNavItem.landingPageRoute.slug.current}`}
									activeClassName="active"
								>
									{rightSideNavItem.title}
								</Link>
							</li>
						))}
					</RightSideNav>
				</NavStyles>
				{secondaryNavMenu && (
					<SecondaryNav>
						<SecondaryNavStyles>
							{secondaryNavMenu.map((secondaryNavMenuItem) => (
								<li key={secondaryNavMenuItem.landingPageRoute.id}>
									<Link
										to={`/${secondaryNavMenuItem.landingPageRoute.slug.current}`}
										activeClassName="active"
									>
										{secondaryNavMenuItem.landingPageRoute.title}
									</Link>
								</li>
							))}
						</SecondaryNavStyles>
					</SecondaryNav>
				)}
			</Nav>
		</>
	)
}

export default Header
