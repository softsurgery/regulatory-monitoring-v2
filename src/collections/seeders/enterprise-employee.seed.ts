import { getPayload } from 'payload'
import config from '@payload-config'
import { EnterpriseEmployee } from '@/payload-types'
import { enterpriseEmployeesData } from './data/enterprise-employee.data'

export async function seedEnterpriseEmployees() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting enterprise-employee seed...')

  const existing = await payload.find({
    collection: 'enterprise-employee',
    limit: 1,
  })
  if (existing.totalDocs > 0) {
    console.log('✅ Enterprise employees already exist, skipping seed')
    return
  }

  for (const enterpriseEmployee of enterpriseEmployeesData) {
    await payload.create({
      collection: 'enterprise-employee',
      data: enterpriseEmployee as EnterpriseEmployee,
    })
  }

  console.log('✅ All enterprise employees seeded')
}
