export default {
  type: 'object',
  name: 'textWithIllustration',
  title: 'Text with Illustration or Image',
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
      type: 'illustration',
      name: 'illustration'
    }
  ]
}