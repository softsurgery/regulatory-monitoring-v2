import type { CollectionConfig } from 'payload'

export const Address: CollectionConfig = {
  slug: 'address' as const,
  admin: {
    useAsTitle: 'address',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      required: true,
    },
    {
      name: 'address2',
      type: 'text',
    },
    {
      name: 'region',
      type: 'text',
      required: true,
    },
    {
      name: 'zipcode',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'relationship',
      relationTo: 'country',
    },
    {
      name: 'enterprises',
      type: 'relationship',
      relationTo: 'enterprise',
      hasMany: true,
    },
  ],
}
