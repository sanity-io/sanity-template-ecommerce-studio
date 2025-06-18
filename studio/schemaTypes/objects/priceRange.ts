import {defineField, defineType} from 'sanity'

export const priceRange = defineType({
  name: 'priceRange',
  title: 'Price range',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'minVariantPrice',
      title: 'Min variant price',
      type: 'number',
    }),
    defineField({
      name: 'maxVariantPrice',
      title: 'Max variant price',
      type: 'number',
    }),
  ],
})
