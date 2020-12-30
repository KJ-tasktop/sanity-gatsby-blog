import React from 'react'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
// import ContentWrapper from '../containers/contentWrapper'
import CTALink from './CTALink'

const ComponentWrapper = styled.div`
	width: 1200px;
	display: flex;
	flex-direction: row;
`

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 24px;
	width: 40%;
`

const RightSide = styled.div`
	width: 60%;

	img {
		width: 100%;
	}
`

const maybeImage = (illustration) => {
	let img = null
	if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
		const fluidProps = getFluidGatsbyImage(illustration.image.asset._id, { maxWidth: 960 }, clientConfig.sanity)

		img = <img src={fluidProps.src} alt={illustration.image.alt} />
	}
	return img
}

function Hero({ label, heading, tagline, cta, illustration }) {
	const img = maybeImage(illustration)
	return (
		<ComponentWrapper>
			{/* Left col */}
			<LeftSide>
				<p>{label}</p>
				<h1>{heading}</h1>
				{tagline && (
					<div>
						<PortableText blocks={tagline} />
					</div>
				)}
				{cta && cta.title && (
					<CTALink
						{...cta}
						buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
					/>
				)}
			</LeftSide>
			{/* Right col */}
			<RightSide>{img}</RightSide>
		</ComponentWrapper>
	)
}

export default Hero
