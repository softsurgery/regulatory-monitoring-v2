import type { CollectionConfig } from 'payload'

export const Country: CollectionConfig = {
  slug: 'country' as const,
  admin: {
    useAsTitle: 'englishName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'alpha2Code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'alpha3Code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'englishName',
      type: 'text',
    },
    {
      name: 'addresses',
      type: 'relationship',
      relationTo: 'address',
      hasMany: true,
    },
  ],
}
