import { getPayload } from 'payload'
import config from '@payload-config'
import { Employee } from '@/payload-types'
import { employeesData } from './data/employee.data'

export async function seedEmployees() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting employee seed...')

  const existing = await payload.find({
    collection: 'employee',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Employees already exist, skipping seed')
    return
  }

  for (const employee of employeesData) {
    await payload.create({
      collection: 'employee',
      data: employee as Employee,
    })
  }

  console.log('✅ All employees seeded')
}
