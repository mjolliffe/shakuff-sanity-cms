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
                  buildHookId: '5f7b6d134c790532414a4e91',
                  title: 'Sanity Studio',
                  name: 'shakuff-sanity-cms-studio',
                  apiId: 'd6d5c0c1-e7e0-4045-ad81-e6f440078798'
                },
                {
                  buildHookId: '5f7b6d13d6d83e2f43a3eb9c',
                  title: 'Blog Website',
                  name: 'shakuff-sanity-cms',
                  apiId: '2f14202c-e757-4211-8785-c127916f5cc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjolliffe/shakuff-sanity-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://shakuff-sanity-cms.netlify.app', category: 'apps'}
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
