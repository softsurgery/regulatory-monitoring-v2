import type { CollectionConfig } from 'payload'

export const Subscription: CollectionConfig = {
  slug: 'subscription',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'enterprise',
      type: 'relationship',
      relationTo: 'enterprise',
      required: true,
    },
  ],
}
