export default {
    type: 'object',
    name: 'textWithIllustration',
    title: 'Text with Illustration or Image',
    fields: [
        {
            name: 'columnSplit',
            title: 'Column Split',
            type: 'string',
            description: 'How would you like the columns split? The default is 50/50, but can be increased to 55/45, or 60/40',
            options: {
                list: [
                    {title: '60/40', value: 'sixtyForty'},
                    {title: '55/45', value: 'fiftyFiveFortyFive'},
                    {title: '50/50', value: ''},
                ],
                layout: 'radio'
            }
        },
        {
            name: 'leftSideWide',
            title: 'Left Side Media',
            description: 'Set this to true if the design calls for the media (the wider side) to be on the left',
            type: 'boolean',
        },
        {
            name: 'label',
            type: 'string',
        },
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
        },
        {
            type: 'simpleBlockContent',
            name: 'text'
        },
        {
            name: 'cta',
            type: 'cta',
        },
        {
            type: 'illustration',
            name: 'illustration'
        }
    ]
}
