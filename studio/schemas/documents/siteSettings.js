export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Site Settings',
	__experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'Describe your blog for search engines and social media.',
		},
		{
			name: 'keywords',
			type: 'array',
			title: 'Keywords',
			description: 'Add keywords that describes your blog.',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		},
        {
            title: 'Open graph',
            name: 'openGraph',
            description: 'These will be the default meta tags on all pages that have not set their own',
            type: 'openGraph'
        },
	],
}
