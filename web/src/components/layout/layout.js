import React from 'react'
import styled from 'styled-components'
import Header from '../header/header'

import '../../styles/layout.css'
import styles from './layout.module.css'
import GlobalStyles from '../../styles/GlobalStyles'

const ContentWrapper = styled.div`
	width: 1200px;
	border: 3px solid red;
	margin: 0 auto;
`

const Layout = ({ children, onHideNav, onShowNav, showNav, primaryNavMenu, secondaryNavMenu, siteTitle }) => (
	<>
		<GlobalStyles />
		<Header
			primaryNavMenu={primaryNavMenu}
			secondaryNavMenu={secondaryNavMenu}
			siteTitle={siteTitle}
			onHideNav={onHideNav}
			onShowNav={onShowNav}
			showNav={showNav}
		/>
		<ContentWrapper className={styles.content}>{children}</ContentWrapper>
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.siteInfo}>
					&copy; {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</div>
			</div>
		</footer>
	</>
)

export default Layout
