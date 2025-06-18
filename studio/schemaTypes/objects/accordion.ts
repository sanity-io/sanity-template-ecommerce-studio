import {StackCompactIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'
import {defineField, defineType} from 'sanity'

export const accordion = defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon: StackCompactIcon,
  fields: [
    // Groups
    defineField({
      name: 'groups',
      title: 'Accordion Groups',
      type: 'array',
      description: 'Add collapsible content sections with titles and descriptions',
      of: [{type: 'accordionGroup'}],
      validation: (Rule) => Rule.min(1).error('At least one accordion group is required'),
    }),
  ],
  preview: {
    select: {
      groups: 'groups',
    },
    prepare({groups = []}) {
      return {
        subtitle: 'Accordion',
        title: groups.length > 0 ? pluralize('group', groups.length, true) : 'No groups',
        media: StackCompactIcon,
      }
    },
  },
})
