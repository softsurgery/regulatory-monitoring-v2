import { getPayload } from 'payload'
import config from '@payload-config'
import { TextType } from '@/payload-types'
import { textTypesData } from './data/text-type.data'

export async function seedTextTypes() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting text-type seed...')

  const existing = await payload.find({
    collection: 'text-type',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Text types already exist, skipping seed')
    return
  }

  for (const textType of textTypesData) {
    await payload.create({
      collection: 'text-type',
      data: textType as TextType,
    })
  }

  console.log('✅ All text types seeded')
}
