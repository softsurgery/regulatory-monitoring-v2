import { seedAddresses } from '@/collections/seeders/address.seed'
import { seedCountries } from '@/collections/seeders/country.seed'
import { seedEmployees } from '@/collections/seeders/employee.seed'
import { seedEnterpriseEmployees } from '@/collections/seeders/enterprise-employee.seed'
import { seedEnterprises } from '@/collections/seeders/enterprise.seed'
import { seedJorts } from '@/collections/seeders/jort.seed'
import { seedSubscriptions } from '@/collections/seeders/subscription.seed'
import { seedTexts } from '@/collections/seeders/text.seed'
import { seedTextSystems } from '@/collections/seeders/text-system.seed'
import { seedTextThemes } from '@/collections/seeders/text-theme.seed'
import { seedTextTypes } from '@/collections/seeders/text-type.seed'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await seedCountries()
    await seedAddresses()
    await seedTextSystems()
    await seedTextThemes()
    await seedTextTypes()
    await seedJorts()
    await seedEnterprises()
    await seedEmployees()
    await seedEnterpriseEmployees()
    await seedSubscriptions()
    await seedTexts()
    return NextResponse.json({
      success: true,
      message: 'All data seeded successfully',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Seeding failed' }, { status: 500 })
  }
}
