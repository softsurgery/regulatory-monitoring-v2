import type { CollectionConfig } from 'payload'

export const EnterpriseEmployee: CollectionConfig = {
  slug: 'enterprise-employee',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'employee',
      type: 'relationship',
      relationTo: 'employee',
      required: true,
    },
    {
      name: 'enterprise',
      type: 'relationship',
      relationTo: 'enterprise',
      required: true,
    },
    {
      name: 'responsible',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
