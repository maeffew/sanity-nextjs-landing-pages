export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ec031129a08500058e50bd9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xb8qui8a',
                  apiId: '7006221e-4ceb-4824-b794-9eb243642b6d'
                },
                {
                  buildHookId: '5ec0311211c8e0129426dc04',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xiqjkb36',
                  apiId: 'd49608ea-106e-42b4-a980-f4be36a78d37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maeffew/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xiqjkb36.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
