import type { CollectionConfig } from 'payload'

export const Enterprise: CollectionConfig = {
  slug: 'enterprise',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'taxIdentificationNumber',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'address',
      type: 'relationship',
      relationTo: 'address',
      required: true,
    },
    {
      name: 'employees',
      type: 'relationship',
      relationTo: 'enterprise-employee',
      hasMany: true,
    },
    {
      name: 'subscriptions',
      type: 'relationship',
      relationTo: 'subscription',
      hasMany: true,
    },
  ],
}
