export default {
	type: 'document',
	name: 'navMenuPrimary',
	title: 'Primary Navigation',
	__experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
	fields: [
		{
			type: 'string',
			name: 'title',
		},
		{
			type: 'array',
			name: 'left',
			of: [{ type: 'cta' }],
		},
		{
			type: 'array',
			name: 'right',
			of: [{ type: 'cta' }],
		},
	],
}
