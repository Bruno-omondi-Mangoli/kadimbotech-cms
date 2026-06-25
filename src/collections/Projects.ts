import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'completedAt'],
    description: 'Portfolio projects displayed on the Portfolio page.',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Short Description',
      admin: {
        description: 'Shown on the portfolio card.',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      label: 'Full Case Study',
      admin: {
        description: 'Detailed project description for the case study page.',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Category',
      options: [
        { label: 'Web Development', value: 'Web Development' },
        { label: 'Graphic Design', value: 'Graphic Design' },
        { label: 'Data Analysis', value: 'Data Analysis' },
        { label: 'Data Annotation', value: 'Data Annotation' },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Cover Image',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Technology Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'clientName',
      type: 'text',
      label: 'Client Name',
    },
    {
      name: 'clientCountry',
      type: 'text',
      label: 'Client Country',
    },
    {
      name: 'projectUrl',
      type: 'text',
      label: 'Live Project URL',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Project',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show this project in the featured section on the home page.',
      },
    },
    {
      name: 'completedAt',
      type: 'date',
      label: 'Completion Date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
