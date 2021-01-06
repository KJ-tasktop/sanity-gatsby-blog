import React, { useState } from 'react'
import { graphql } from 'gatsby'
import LayoutContainer from '../containers/layout'
// import Container from '../components/container'
import SEO from '../components/seo'
import GraphQLErrorList from '../components/graphql-error-list'

import Hero from '../components/hero/Hero'
import TwoColumnRow from '../components/two-column-row/twoColumnRows'
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
		}
		site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
			# 	primaryColor {
			# 		hex
			# 	}
			# 	secondaryColor {
			# 		hex
			# 	}
			title
			openGraph {
				title
				description
				image {
					...SanityImage
				}
			}
		}
	}
`

const Page = (props) => {
	const { data, errors } = props

	if (errors) {
		return (
			<LayoutContainer>
				<GraphQLErrorList errors={errors} />
			</LayoutContainer>
		)
	}

	const { page, site } = data || {}

	if (!site) {
		throw new Error(
			'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
		)
	}

	const content = (page._rawContent || [])
		.filter((c) => !c.disabled)
		.map((c, i) => {
			let el = null
			switch (c._type) {
				// case 'pricing':
				// 	el = <Pricing key={c._key} {...c} />
				// 	break
				case 'twoColumn':
					el = <TwoColumnRow key={c._key} {...c} />
					break
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

	const secondaryNavMenuItems = page.navMenu && (page.navMenu.items || [])

	return (
		<LayoutContainer secondaryNavMenu={secondaryNavMenuItems}>
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
		</LayoutContainer>
	)
}

export default Page
