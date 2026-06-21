import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'subscribedAt', 'active'],
    description: 'Newsletter subscribers. Export this list to send email campaigns.',
  },
  access: {
    read: ({ req }) => {
      return req.user !== null
    },
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      label: 'Email Address',
    },
    {
      name: 'name',
      type: 'text',
      required: false,
      label: 'First Name',
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Active Subscriber',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Uncheck to unsubscribe this person.',
      },
    },
    {
      name: 'subscribedAt',
      type: 'date',
      label: 'Subscribed On',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'select',
      label: 'Signup Source',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Home Page', value: 'home' },
        { label: 'Blog', value: 'blog' },
        { label: 'Contact Page', value: 'contact' },
      ],
    },
  ],
}
