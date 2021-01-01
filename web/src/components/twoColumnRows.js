import React from 'react'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import PortableText from './portableText'
import clientConfig from '../../client-config'
// import ContentWrapper from '../containers/contentWrapper'
import CTALink from './CTALink'
import Video from './video'

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

	img {
		width: 100%;
	}
`

const RightSide = styled.div`
	width: 60%;

	img {
		width: 100%;
	}
`

const maybeImage = (illustration) => {
	let img = null
	if (illustration && illustration.disabled !== true && illustration.image && illustration.image.asset) {
		const fluidProps = getFluidGatsbyImage(illustration.image.asset._id, { maxWidth: 960 }, clientConfig.sanity)

		img = <img className="w-full sm:h-64 mx-auto" src={fluidProps.src} alt={illustration.image.alt} />
	}
	return img
}

const InfoRow = ({ label, heading, text, cta, illustration, video }) => {
	const img = maybeImage(illustration)
	return (
		<ComponentWrapper>
			<LeftSide>
				<p>{label}</p>
				<h1>{heading}</h1>
				{text && (
					<div>
						<PortableText blocks={text} />
					</div>
				)}
				{cta && cta.title && (
					<CTALink
						{...cta}
						buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
					/>
				)}
			</LeftSide>
			{img && <RightSide>{img}</RightSide>}
			{video && (
				<RightSide>
					<Video video={video} />
				</RightSide>
			)}
		</ComponentWrapper>
	)
}

const InfoRowFlipped = ({ label, heading, text, cta, illustration, video }) => {
	const img = maybeImage(illustration)
	return (
		<ComponentWrapper>
			{img && <LeftSide>{img}</LeftSide>}
			{video && (
				<LeftSide>
					<Video />
				</LeftSide>
			)}
			<RightSide>
				<p>{label}</p>
				<h1>{heading}</h1>
				{text && (
					<div>
						<PortableText blocks={text} />
					</div>
				)}
				{cta && cta.title && <CTALink {...cta} />}
			</RightSide>
		</ComponentWrapper>
	)
}

function TwoColumnRow({ title, rows }) {
	const contentRows = (rows || [])
		.filter((r) => !r.disabled)
		.map((r, i) => (i % 2 === 0 ? <InfoRow key={r._key} {...r} /> : <InfoRowFlipped key={r._key} {...r} />))

	console.log('contentRows: ', contentRows)
	return (
		<>
			<h1>{title}</h1>
			{contentRows}
		</>
	)
}

export default TwoColumnRow
