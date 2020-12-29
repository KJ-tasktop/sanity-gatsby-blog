import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
import CTALink from './CTALink'

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
		<div>
			{/* Left col */}
			<div>
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
				{/* <div>{cta.title}</div>
				<div>{cta.landingPageRoute.slug.current}</div> */}
			</div>
			{/* Right col */}
			<div>{img}</div>
		</div>
	)
}

export default Hero
