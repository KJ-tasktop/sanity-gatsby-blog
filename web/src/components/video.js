import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ video }) => {
	console.log('video: ', video)
	console.log('video.versions[0].file.asset.url: ', video.versions[0].file.asset.url)

	const { url } = video.versions[0].file.asset
	return <ReactPlayer url={url} controls />
}

export default Video
