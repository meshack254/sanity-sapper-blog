export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '6148d04b011ec40091e9eff6',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-a4i8aqkq',
                  apiId: 'f95f0336-8b6d-4b61-8750-bc67dac8a9f1'
                },
                {
                  buildHookId: '6148d04c922ff500e49b9304',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-518qgoqw',
                  apiId: '48b47900-70bf-4018-b107-ab64fde3b122'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meshack254/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-518qgoqw.netlify.app', category: 'apps'}
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
