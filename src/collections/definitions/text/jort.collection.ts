// jort.collection.ts
import type { CollectionConfig } from 'payload'

export const Jort: CollectionConfig = {
  slug: 'jort',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'publishDate',
      type: 'date',
    },
  ],
}
