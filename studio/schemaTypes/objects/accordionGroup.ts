import {defineField, defineType} from 'sanity'
import {toPlainText} from '@portabletext/toolkit'

export const accordionGroup = defineType({
  name: 'accordionGroup',
  title: 'Group',
  type: 'object',
  icon: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The clickable header that expands/collapses the content',
      validation: (Rule) => Rule.required().error('Section title is required'),
    }),
    defineField({
      name: 'body',
      title: 'Section Content',
      type: 'blockContent',
      description: 'Rich text content that will be hidden/shown when the accordion is toggled',
    }),
  ],
  preview: {
    select: {
      body: 'body',
      title: 'title',
    },
    prepare(selection) {
      const {body, title} = selection
      return {
        subtitle: body && toPlainText(body),
        title,
      }
    },
  },
})
