export default {
    type: 'object',
    name: 'textWithVideo',
    title: 'Text with Video',
    fields: [
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
            name: 'video',
            title: 'Video',
            type: 'videoPlug',
        }
    // {
    //     name: 'video',
    //     title: 'Video',
    //     type: 'mux.video',
    //     options: [
    //         {
    //             name: 'autoplay',
    //             title: 'Autoplay',
    //             type: 'boolean'
    //         }
    //     ]
    // }
    ]
}
