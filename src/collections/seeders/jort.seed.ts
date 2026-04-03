import { getPayload } from 'payload'
import config from '@payload-config'
import { Jort } from '@/payload-types'
import { jortsData } from './data/jort.data'

export async function seedJorts() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting jort seed...')

  const existing = await payload.find({
    collection: 'jort',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Jorts already exist, skipping seed')
    return
  }

  for (const jort of jortsData) {
    await payload.create({
      collection: 'jort',
      data: jort as Jort,
    })
  }

  console.log('✅ All jorts seeded')
}
