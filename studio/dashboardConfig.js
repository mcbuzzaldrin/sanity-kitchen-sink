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
                  buildHookId: '6320061710486851f865d002',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1jgq74w3',
                  apiId: 'f4a13d09-d9f6-41ac-bc15-d769b79c0fcf'
                },
                {
                  buildHookId: '63200618a865665295070c1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rmx9oadv',
                  apiId: '537626eb-d288-4273-b51f-54f571698e98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcbuzzaldrin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rmx9oadv.netlify.app', category: 'apps'}
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
