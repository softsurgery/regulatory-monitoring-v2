import { getPayload } from 'payload'
import config from '@payload-config'
import { Subscription } from '@/payload-types'
import { subscriptionsData } from './data/subscription.data'

export async function seedSubscriptions() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting subscription seed...')

  const existing = await payload.find({
    collection: 'subscription',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Subscriptions already exist, skipping seed')
    return
  }

  for (const subscription of subscriptionsData) {
    await payload.create({
      collection: 'subscription',
      data: subscription as Subscription,
    })
  }

  console.log('✅ All subscriptions seeded')
}
