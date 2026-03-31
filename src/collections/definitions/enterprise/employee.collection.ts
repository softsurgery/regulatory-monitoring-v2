import type { CollectionConfig } from 'payload'

export const Employee: CollectionConfig = {
  slug: 'employee' as const,
  admin: {
    useAsTitle: 'phone',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users' as const,
      required: true,
    },
    {
      name: 'enterprises',
      type: 'relationship',
      relationTo: 'enterprise-employee',
      hasMany: true,
    },
  ],
}
