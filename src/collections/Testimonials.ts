import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'company', 'rating', 'approved'],
    description: 'Client testimonials displayed on the home page and service pages.',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Client Full Name',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Job Title / Role',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Company Name',
    },
    {
      name: 'country',
      type: 'text',
      required: true,
      label: 'Country',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
      admin: {
        description: 'The client review text. Keep it concise and impactful.',
      },
    },
    {
      name: 'rating',
      type: 'select',
      required: true,
      defaultValue: '5',
      label: 'Star Rating',
      options: [
        { label: '5 Stars', value: '5' },
        { label: '4 Stars', value: '4' },
        { label: '3 Stars', value: '3' },
      ],
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Client Photo',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Service Used',
      options: [
        { label: 'Web Development', value: 'web-development' },
        { label: 'Graphic Design', value: 'graphic-design' },
        { label: 'Data Analysis', value: 'data-analysis' },
        { label: 'Data Annotation', value: 'data-annotation' },
      ],
    },
    {
      name: 'approved',
      type: 'checkbox',
      label: 'Approved for Display',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Only approved testimonials are shown on the website.',
      },
    },
  ],
}
