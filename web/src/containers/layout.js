import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../components/layout/layout'

const query = graphql`
	query SiteTitleQuery {
		site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
			title
		}
		nav: sanityNavMenuPrimary(_id: { eq: "primaryNavigation" }) {
			image {
				asset {
					fixed(width: 200, height: 200) {
						...GatsbySanityImageFixed
					}
					fluid(maxWidth: 400) {
						...GatsbySanityImageFluid
					}
				}
			}
			left {
				_key
				title
				landingPageRoute {
					_type
					id
					slug {
						current
					}
				}
			}
			right {
				_key
				title
				landingPageRoute {
					_type
					id
					slug {
						current
					}
				}
			}
		}
	}
`

function LayoutContainer(props) {
	// const [showNav, setShowNav] = useState(false)
	// function handleShowNav() {
	// 	setShowNav(true)
	// }
	// function handleHideNav() {
	// 	setShowNav(false)
	// }

	console.log('props: ', props)

	return (
		<StaticQuery
			query={query}
			render={(data) => {
				if (!data.site) {
					throw new Error(
						'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
					)
				}
				return (
					<Layout
						{...props}
						primaryNavMenu={data.nav}
						// secondaryNavMenu={props.secondaryNavMenu}
						// showNav={showNav}
						siteTitle={data.site.title}
						// onHideNav={handleHideNav}
						// onShowNav={handleShowNav}
					/>
				)
			}}
		/>
	)
}

export default LayoutContainer
