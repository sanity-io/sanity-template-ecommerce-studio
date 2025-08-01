import {InfoOutlineIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Products')
    .schemaType('product')
    .child(
      S.documentTypeList('product').child((productId) =>
        S.list()
          .title('Product')
          .items([
            // Details
            S.listItem()
              .title('Details')
              .icon(InfoOutlineIcon)
              .child(S.document().schemaType('product').documentId(productId)),
            // Product variants
            S.listItem()
              .title('Variants')
              .schemaType('productVariant')
              .child(() =>
                S.documentList()
                  .title('Variants')
                  .schemaType('productVariant')
                  .filter(`_type == "productVariant" && store.productId == $productId`)
                  .params({
                    productId: parseInt(productId.replace('shopifyProduct-', ''), 10),
                  }),
              ),
          ]),
      ),
    ),
)
