import { getPayload } from 'payload'
import config from '@payload-config'
import { TextSystem } from '@/payload-types'
import { textSystemsData } from './data/text-system.data'

export async function seedTextSystems() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting text-system seed...')

  const existing = await payload.find({
    collection: 'text-system',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Text systems already exist, skipping seed')
    return
  }

  for (const textSystem of textSystemsData) {
    await payload.create({
      collection: 'text-system',
      data: textSystem as TextSystem,
    })
  }

  console.log('✅ All text systems seeded')
}
