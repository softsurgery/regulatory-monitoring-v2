import { getPayload } from 'payload'
import config from '@payload-config'
import { Enterprise } from '@/payload-types'
import { enterprisesData } from './data/enterprise.data'

export async function seedEnterprises() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting enterprise seed...')

  const existing = await payload.find({
    collection: 'enterprise',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Enterprises already exist, skipping seed')
    return
  }

  for (const enterprise of enterprisesData) {
    await payload.create({
      collection: 'enterprise',
      data: enterprise as Enterprise,
    })
  }

  console.log('✅ All enterprises seeded')
}
