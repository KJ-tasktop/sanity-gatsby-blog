export default {
	type: 'document',
	name: 'navMenuSecondary',
	title: 'Secondary Navigation',
	fields: [
		{
			type: 'string',
			name: 'title',
		},
		{
			type: 'array',
			name: 'items',
			of: [{ type: 'cta' }],
		},
	],
}
