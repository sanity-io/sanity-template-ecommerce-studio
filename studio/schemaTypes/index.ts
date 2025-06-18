// Document types
import {collection} from './documents/collection'
import {product} from './documents/product'
import {productVariant} from './documents/productVariant'

// Object types
import {accordion} from './objects/accordion'
import {accordionGroup} from './objects/accordionGroup'
import {callout} from './objects/callout'
import {inventory} from './objects/inventory'
import {option} from './objects/option'
import {priceRange} from './objects/priceRange'
import {proxyString} from './objects/proxyString'
import {shopifyCollection} from './objects/shopifyCollection'
import {shopifyCollectionRule} from './objects/shopifyCollectionRule'
import {shopifyProduct} from './objects/shopifyProduct'
import {shopifyProductVariant} from './objects/shopifyProductVariant'

// Block content
import {blockContent} from './blocks/blockContent'

// Schema types array for Sanity config
export const schemaTypes = [
  // Document types
  collection,
  product,
  productVariant,

  // Object types
  accordion,
  accordionGroup,
  callout,
  inventory,
  option,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,

  // Block content
  blockContent,
]
