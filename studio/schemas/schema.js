// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// import localeString from './objects/localeString'

// document schemas
import navMenuPrimary from './documents/NavMenuPrimary'
import navMenuSecondary from './documents/NavMenuSecondary'
import route from './documents/Route'
import page from './documents/Page'
import author from './documents/author'
import category from './documents/category'
import pageCategory from './documents/PageCategory'
// import topLevel from './documents/TopLevelPage'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import cta from './objects/cta'
import link from './objects/link'
import openGraph from './objects/openGraph'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import simpleBlockContent from './objects/simpleBlockContent'

// Plugs are the individual page components
const allPlugs = Object.values(plugs).map((plug) => ({...plug, fields: plugDefaultFields.concat(plug.fields)}))

// console.log('Plugs: ', plugs)

console.log('allPlugs: ', allPlugs)

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'blog',
	types: schemaTypes.concat([
		siteSettings,
		navMenuPrimary,
		navMenuSecondary,
		page,
		route,
		openGraph,
		cta,
		link,
		post,
        category,
        pageCategory,
        // topLevel,
		author,
		mainImage,
        authorReference,
        simpleBlockContent,
		bodyPortableText,
		bioPortableText,
		excerptPortableText,
	])
	.concat(allPlugs)
})
