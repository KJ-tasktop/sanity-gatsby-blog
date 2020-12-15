import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'
import Container from '../components/container'
import SEO from '../components/seo'
import GraphQLErrorList from '../components/graphql-error-list'

import Hero from '../components/Hero'
// import InfoRows from '../components/InfoRows'
// import CTAColumns from '../components/cta-columns'
// import CTA from '../components/cta'
// import Pricing from '../components/pricing'
// import { TopWave, BottomWave } from '../components/wave'

export const query = graphql`
	query PageTemplateQuery($id: String!) {
		page: sanityPage(id: { eq: $id }) {
			title
			...PageInfo
			slug {
				current
			}
			# navMenu {
			# 	items {
			# 		landingPageRoute {
			# 			title
			# 			slug {
			# 				current
			# 			}
			# 		}
			# 	}
			# }
		}
		# site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
		# 	primaryColor {
		# 		hex
		# 	}
		# 	secondaryColor {
		# 		hex
		# 	}
		# 	title
		# 	openGraph {
		# 		title
		# 		description
		# 		image {
		# 			...SanityImage
		# 		}
		# 	}
		# }
	}
`

const Page = (props) => {
	const { data, errors } = props
	console.log('errors: ', errors)
	console.log('data: ', data)

	if (errors) {
		return (
			<Layout>
				<GraphQLErrorList errors={errors} />
			</Layout>
		)
	}

	// const { site } = data || {}

	// if (!site) {
	// 	throw new Error(
	// 		'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
	// 	)
	// }

	const { page } = data /* || data.route.page */

	const content = (page._rawContent || [])
		.filter((c) => !c.disabled)
		.map((c, i) => {
			let el = null
			switch (c._type) {
				// case 'pricing':
				// 	el = <Pricing key={c._key} {...c} />
				// 	break
				// case 'infoRows':
				// 	el = <InfoRows key={c._key} {...c} />
				// 	break
				case 'hero':
					el = <Hero key={c._key} {...c} />
					break
				// case 'ctaColumns':
				// 	el = <CTAColumns key={c._key} {...c} />
				// 	break
				// case 'ctaPlug':
				// 	el = <CTA key={c._key} {...c} />
				// 	break
				// case 'uiComponentRef':
				// 	switch (c.name) {
				// 		case 'topWave':
				// 			el = <TopWave />
				// 			break
				// 		case 'bottomWave':
				// 			el = <BottomWave />
				// 			break
				// 		default:
				// 			break
				// 	}
				// 	break
				default:
					el = null
			}
			return el
		})

	// const primaryNavMenuItems = data.navMenu
	const secondaryNavMenuItems = page.navMenu && (page.navMenu.items || [])
	console.log('secondaryNavMenuItems: ', secondaryNavMenuItems)
	// const pageTitle = data.route && !data.route.useSiteTitle && page.title

	// console.log('data: ', data)
	// console.log('data.route: ', data.route)
	// console.log('page.title: ', page.title)
	// console.log('pageTitle: ', pageTitle)

	// <Layout /* primaryNavMenu={primaryNavMenuItems} */ secondaryNavMenu={secondaryNavMenuItems} textWhite>
	return (
		<Layout secondaryNavMenu={secondaryNavMenuItems}>
			<h1>This is the Layout in the Page Template</h1>
			{/* <SEO
			title={pageTitle}
			description={site.description}
			keywords={site.keywords}
			bodyAttr={{
				class: 'leading-normal tracking-normal text-white gradient',
			}}
			gradient={gradient}
		/> */}
			<div>{content}</div>
		</Layout>
	)
}

export default Page
