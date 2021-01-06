import React from 'react'
import styled from 'styled-components'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import PortableText from '../portableText'
import clientConfig from '../../../client-config'
// import ContentWrapper from '../containers/contentWrapper'
import CTALink from '../CTALink'
import Video from '../video'

import { ComponentWrapper, CopyPanel, MediaPanel } from './twoColumnRow.styles'

const maybeImage = (illustration) => {
	let img = null
	if (illustration && illustration.disabled !== true && illustration.image && illustration.image.asset) {
		const fluidProps = getFluidGatsbyImage(illustration.image.asset._id, { maxWidth: 960 }, clientConfig.sanity)

		img = <img src={fluidProps.src} alt={illustration.image.alt} />
	}
	return img
}

const InfoRow = ({ label, heading, text, cta, illustration, video, columnSplit }) => {
	const img = maybeImage(illustration)
	return (
		<ComponentWrapper>
			<CopyPanel className={columnSplit || ''}>
				<p>{label}</p>
				<h1>{heading}</h1>
				{text && <PortableText blocks={text} />}
				{cta && cta.title && <CTALink {...cta} />}
			</CopyPanel>
			{img && <MediaPanel className={columnSplit || ''}>{img}</MediaPanel>}
			{video && (
				<MediaPanel className={columnSplit || ''}>
					<Video video={video} />
				</MediaPanel>
			)}
		</ComponentWrapper>
	)
}

const InfoRowFlipped = ({ label, heading, text, cta, illustration, video, columnSplit }) => {
	const img = maybeImage(illustration)
	return (
		<ComponentWrapper>
			{img && <MediaPanel className={columnSplit || ''}>{img}</MediaPanel>}
			{video && (
				<MediaPanel className={columnSplit || ''}>
					<Video />
				</MediaPanel>
			)}
			<CopyPanel className={columnSplit || ''}>
				<p>{label}</p>
				<h1>{heading}</h1>
				{text && <PortableText blocks={text} />}
				{cta && cta.title && <CTALink {...cta} />}
			</CopyPanel>
		</ComponentWrapper>
	)
}

function TwoColumnRow({ title, rows }) {
	const contentRows = (rows || [])
		.filter((r) => !r.disabled)
		.map((r) =>
			r.leftSideWide !== true ? <InfoRow key={r._key} {...r} /> : <InfoRowFlipped key={r._key} {...r} />
		)

	console.log('contentRows: ', contentRows)
	return (
		<>
			<h1>{title}</h1>
			{contentRows}
		</>
	)
}

export default TwoColumnRow
