// function myAsyncSlugifier(input) {
//     return input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
// }

// export default {
// 	type: 'document',
// 	name: 'topLevel',
//     title: 'First Tier Page',
//     fieldsets: [
// 		{
// 			title: 'Visibility',
// 			name: 'visibility',
// 		},
// 	],
// 	fields: [
// 		{
// 			name: 'title',
// 			type: 'string',
// 			title: 'Title',
//         },
//         {
// 			name: 'navMenu',
// 			type: 'reference',
// 			title: 'Secondary Navigation menu',
// 			// weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
// 			to: [{ type: 'navMenuSecondary' }],
// 			description: 'If there is a secondary navigation menu for this page, which menu is it?',
// 		},
// 		{
// 			name: 'content',
// 			type: 'array',
// 			title: 'Page sections',
// 			description: 'Add, edit, and reorder sections',
// 			of: [
// 				// { type: 'pricing' },
// 				// { type: 'uiComponentRef' },
// 				{ type: 'hero' },
// 				// { type: 'infoRows' },
// 				// { type: 'ctaColumns' },
// 				// { type: 'ctaPlug' },
// 			],
// 		},
//         {
// 			name: 'slug',
// 			type: 'slug',
// 			description: 'This is the website path the page will accessible on',
// 			title: 'Path',
// 			validation: (Rule) =>
// 				Rule.required().custom((slug) => {
// 					if (slug && slug.current && slug.current === '/') {
// 						return 'Cannot be /'
// 					}
// 					return true
// 				}),
// 			options: {
// 				source: 'title',
// 				// Read more: https://www.sanity.io/docs/slug-type
// 				slugify: myAsyncSlugifier,
// 			},
// 		},
// 		{
// 			title: 'Use site title?',
// 			description: 'Use the site settings title as page title instead of the title on the referenced page',
// 			name: 'useSiteTitle',
// 			type: 'boolean',
// 		},
// 		{
// 			title: 'Open graph',
// 			name: 'openGraph',
// 			description: 'These values populate meta tags',
// 			type: 'openGraph',
// 		},
// 		{
// 			title: 'Include in sitemap',
// 			description: 'For search engines. Will be generateed to /sitemap.xml',
// 			name: 'includeInSitemap',
// 			type: 'boolean',
// 			fieldset: 'visibility',
// 		},
// 		{
// 			title: 'Disallow in robots.txt',
// 			description: 'Hide this route for search engines like google',
// 			name: 'disallowRobots',
// 			type: 'boolean',
// 			fieldset: 'visibility',
// 		},
// 		{
// 			name: 'campaign',
// 			type: 'string',
// 			title: 'Campaign',
// 			description: 'UTM for campaings',
// 		},
// 	],
// }
