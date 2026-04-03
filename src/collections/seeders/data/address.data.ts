import { Address } from '@/payload-types'

export const addressesData: Partial<Address>[] = [
  {
    address: '123 Main Street',
    address2: 'Apt 4B',
    region: 'Tunis',
    zipcode: '1001',
    // country will be set after country seed is created
    // enterprises will be set after enterprise seed is created
  },
  {
    address: '45 Avenue Habib Bourguiba',
    address2: '',
    region: 'Tunis',
    zipcode: '1002',
  },
  {
    address: '78 Rue de la Liberté',
    address2: '2nd Floor',
    region: 'Sfax',
    zipcode: '3000',
  },
  {
    address: '12 Boulevard du 20 Mars',
    address2: '',
    region: 'Sousse',
    zipcode: '4000',
  },
  {
    address: '34 Avenue Farhat Hached',
    address2: 'Residence Les Oliviers',
    region: 'Bizerte',
    zipcode: '7000',
  },
  {
    address: '56 Rue Hedi Karray',
    address2: '',
    region: 'Nabeul',
    zipcode: '8000',
  },
  {
    address: '90 Avenue de la République',
    address2: 'Building B',
    region: 'Monastir',
    zipcode: '5000',
  },
  {
    address: '23 Rue Ali Belhouane',
    address2: '',
    region: 'Kairouan',
    zipcode: '3100',
  },
  {
    address: '67 Avenue des Far',
    address2: 'Office 101',
    region: 'Gabès',
    zipcode: '6000',
  },
  {
    address: '89 Rue de la Kasbah',
    address2: '',
    region: 'Tunis',
    zipcode: '1030',
  },
]