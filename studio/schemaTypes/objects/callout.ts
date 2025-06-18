import {BulbOutlineIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const callout = defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    // Text
    defineField({
      name: 'text',
      title: 'Callout Text',
      type: 'text',
      description: 'Brief attention-grabbing text for the callout box',
      rows: 2,
      validation: (Rule) => [
        Rule.required().error('Callout text is required'),
        Rule.max(70).warning(`Callout length shouldn't be more than 70 characters.`),
      ],
    }),
    // Link
    defineField({
      name: 'links',
      title: 'Call-to-Action Link',
      type: 'url',
      description: 'Optional link for the callout (e.g., Learn more, Shop now)',
    }),
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        subtitle: 'Callout',
        title: text,
        media: BulbOutlineIcon,
      }
    },
  },
})
