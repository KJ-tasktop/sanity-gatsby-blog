export default {
    title: 'Simple Block Content',
    name: 'simpleBlockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'Title', value: 'title'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'Quote', value: 'blockquote'},
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'},
                    {title: 'Italic', value: 'italic'},
                    {title: 'Code', value: 'code'}
                ],
                annotations: [
                    {
                        title: 'URL',
                        type: 'link'
                    }
                ]
            }
        }
    ]
}
