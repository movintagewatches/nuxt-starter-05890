import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      contentDirs: ['data'],
      models: [
        {
          name: 'site',
          type: 'page',
          filePath: 'data/site.json',
          urlPath: '/',
          fields: [
            { name: 'heroTitle', type: 'string', required: true },
            { name: 'heroSubtitle', type: 'string' },
            { name: 'services', type: 'list', items: { type: 'string' } },
            { name: 'contactEmail', type: 'string' }
          ]
        }
      ]
    })
  ]
})
