export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcc6368b62a63c4789267e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jbpdpnn4',
                  apiId: '56b5addf-f0aa-4e93-b72f-88fccc4ae2eb'
                },
                {
                  buildHookId: '5fcc6368f47f96c543ba0c09',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wys58wge',
                  apiId: '0a4f3ca6-29ad-4328-b4c4-087463fee49e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KJ-tasktop/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wys58wge.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
