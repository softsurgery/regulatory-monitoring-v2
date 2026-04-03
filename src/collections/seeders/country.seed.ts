import { getPayload } from 'payload'
import config from '@payload-config'
import { Country } from '@/payload-types'
import { countriesData } from './data/country.data'

export async function seedCountries() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting country seed...')

  const existing = await payload.find({
    collection: 'country',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Countries already exist, skipping seed')
    return
  }

  for (const country of countriesData) {
    await payload.create({
      collection: 'country',
      data: country as Country,
    })
  }

  console.log('✅ All countries seeded')
}
