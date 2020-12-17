// Load variables from `.env` as soon as possible
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV || 'development'}`,
})

// import dotenv from 'dotenv'

// dotenv.config({ path: '.env' })
// const path = require('path')
const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-sanity',
			options: {
				...clientConfig.sanity,
				token: process.env.SANITY_READ_TOKEN,
				watchMode: !isProd,
				overlayDrafts: !isProd,
			},
		},
	],
}
