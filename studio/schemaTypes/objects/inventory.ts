import {defineField, defineType} from 'sanity'

export const inventory = defineType({
  name: 'inventory',
  title: 'Inventory',
  type: 'object',
  options: {
    columns: 3,
  },
  fields: [
    // Available
    defineField({
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
    }),
    // Management
    defineField({
      name: 'management',
      title: 'Management',
      type: 'string',
    }),
    // Policy
    defineField({
      name: 'policy',
      title: 'Policy',
      type: 'string',
    }),
  ],
})
