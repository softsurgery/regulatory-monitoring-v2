// text.collection.ts
import type { CollectionConfig } from 'payload'

export const Text: CollectionConfig = {
  slug: 'text',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'textId',
      type: 'text',
      required: true,
      admin: {
        description: 'UUID of the text (stable across versions)',
      },
    },
    {
      name: 'version',
      type: 'number',
      required: true,
      admin: {
        description: 'Version number',
      },
    },
    {
      name: 'isLatest',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this is the latest version',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'resume',
      type: 'textarea',
    },
    {
      name: 'effectiveDate',
      type: 'date',
    },
    {
      name: 'upload',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'theme',
      type: 'relationship',
      relationTo: 'text-theme',
      required: true,
    },
    {
      name: 'system',
      type: 'relationship',
      relationTo: 'text-system',
      required: true,
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'text-type',
      required: true,
    },
    {
      name: 'jort',
      type: 'relationship',
      relationTo: 'jort',
    },
    {
      name: 'keywords',
      type: 'text',
    },
    {
      name: 'consequenceLaw',
      type: 'relationship',
      relationTo: 'text',
      admin: {
        description: 'References another text (version) that this text modifies',
      },
    },
  ],
}
