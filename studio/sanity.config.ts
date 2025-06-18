import {shopifyAssets} from 'sanity-plugin-shopify-assets'
import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {shopifyDocumentActions} from './plugins/shopifyDocumentActions'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {SHOPIFY_STORE_ID} from './constants'

const devOnlyPlugins = [visionTool()]

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'cgd8g1dj'
const dataset = process.env.SANITY_STUDIO_DATASET || 'ecommerce'

export default defineConfig({
  name: 'default',
  title: 'function-recipe-demos',

  projectId,
  dataset,

  plugins: [
    structureTool({structure}),
    shopifyDocumentActions(),
    shopifyAssets({
      shopifyDomain: SHOPIFY_STORE_ID,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
