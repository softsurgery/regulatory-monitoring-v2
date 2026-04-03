import { seedAddresses } from '@/collections/seeders/address.seed'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await seedAddresses()
    return NextResponse.json({
      success: true,
      message: 'Addresses seeded successfully',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Addresses seeding failed' }, { status: 500 })
  }
}
