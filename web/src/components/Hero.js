import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { Link } from 'gatsby'
import PortableText from './portableText'
import clientConfig from '../../client-config'

// const maybeImage = (illustration) => {
// 	let img = null
// 	if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
// 		const fluidProps = getFluidGatsbyImage(illustration.image.asset._id, { maxWidth: 960 }, clientConfig.sanity)

// 		img = <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
// 	}
// 	return img
// }

function Hero({ label, heading, tagline, cta }) {
	// const img = maybeImage(props.illustration)
	return (
		<div>
			{/* Left col */}
			<div>
				<p>{label}</p>
				<h1>{heading}</h1>
				<div>
					<PortableText blocks={tagline} />
				</div>
				{cta && cta.title && <Link {...cta} />}
			</div>
			{/* Right col */}
			{/* <div>{img}</div> */}
		</div>
	)
}

export default Hero
