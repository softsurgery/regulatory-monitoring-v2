import { getPayload } from 'payload'
import config from '@payload-config'
import { Text } from '@/payload-types'
import { textsData } from './data/text.data'

export async function seedTexts() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting text seed...')

  const existing = await payload.find({
    collection: 'text',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Texts already exist, skipping seed')
    return
  }

  for (const text of textsData) {
    await payload.create({
      collection: 'text',
      data: text as Text,
    })
  }

  console.log('✅ All texts seeded')
}
