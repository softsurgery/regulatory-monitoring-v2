import { getPayload } from 'payload'
import config from '@payload-config'
import { TextTheme } from '@/payload-types'
import { textThemesData } from './data/text-theme.data'

export async function seedTextThemes() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting text-theme seed...')

  const existing = await payload.find({
    collection: 'text-theme',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Text themes already exist, skipping seed')
    return
  }

  for (const textTheme of textThemesData) {
    await payload.create({
      collection: 'text-theme',
      data: textTheme as TextTheme,
    })
  }

  console.log('✅ All text themes seeded')
}
