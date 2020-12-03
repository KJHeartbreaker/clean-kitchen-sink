export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fc9247b6681a01df949276b',
                  title: 'Sanity Studio',
                  name: 'clean-kitchen-sink-studio',
                  apiId: '20d85f98-9eee-4f49-b030-7ee43902a02e'
                },
                {
                  buildHookId: '5fc9247bd97f1a220d26b687',
                  title: 'Blog Website',
                  name: 'clean-kitchen-sink',
                  apiId: 'b0dd945d-c05b-4632-80f6-942d7cd21f24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KJHeartbreaker/clean-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://clean-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
