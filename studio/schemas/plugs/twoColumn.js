export default {
    type: 'object',
    name: 'twoColumn',
    title: 'Two Column Rows',
    fields: [
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'array',
            name: 'rows',
            of: [
                { type: 'textWithIllustration' },
                { type: 'textWithVideo' }
            ]
        }
    ]
}
