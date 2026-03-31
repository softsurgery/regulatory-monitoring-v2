// text-help-request.collection.ts
import type { CollectionConfig } from 'payload'

export const TextHelpRequest: CollectionConfig = {
  slug: 'text-help-request',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      type: 'relationship',
      relationTo: 'text',
      required: true,
    },
    {
      name: 'enterprise',
      type: 'relationship',
      relationTo: 'enterprise',
      required: true,
    },
    {
      name: 'request',
      type: 'textarea',
      required: true,
    },
    {
      name: 'requestUser',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
    },
    {
      name: 'answerUser',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'assignUser',
      type: 'relationship',
      relationTo: 'users',
    },
  ],
}
