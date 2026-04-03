import { getPayload } from 'payload'
import config from '@payload-config'
import { Address } from '@/payload-types'
import { addressesData } from './data/address.data'

export async function seedAddresses() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting address seed...')

  const existing = await payload.find({
    collection: 'address',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Addresses already exist, skipping seed')
    return
  }

  for (const address of addressesData) {
    await payload.create({
      collection: 'address',
      data: address as Address,
    })
  }

  console.log('✅ All addresses seeded')
}
