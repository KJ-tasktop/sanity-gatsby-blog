export default {
  name: 'pageCategory',
  type: 'document',
  title: 'Parent Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        // add a button to generate slug from the title field
        source: 'title'
      }
    }
  ]
}
