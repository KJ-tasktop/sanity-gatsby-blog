import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import {
	Nav,
	NavStyles,
	// Logo,
	LeftSideNav,
	RightSideNav,
	SecondaryNav,
	SecondaryNavStyles,
	LogoContainer,
} from './header.styles'

const Header = ({ showNav, siteTitle, scrolled, primaryNavMenu, secondaryNavMenu, textWhite = true }) => {
	const { image, left, right } = primaryNavMenu
	console.log('primaryNavMenu: ', primaryNavMenu)
	return (
		<>
			<Nav id="header">
				<NavStyles>
					{/* <ContentWrapper> */}
					<LogoContainer>
						<Link id="siteTitle" to="/">
							<Img fluid={image.asset.fluid} alt={siteTitle} />
						</Link>
					</LogoContainer>

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
