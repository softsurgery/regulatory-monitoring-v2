import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { storageAdapter } from './s3-adapter'

import { Country } from './collections/definitions/country/country.collection'
import { Address } from './collections/definitions/address/address.collection'
import { Employee } from './collections/definitions/enterprise/employee.collection'
import { Enterprise } from './collections/definitions/enterprise/enterprise.collection'
import { EnterpriseEmployee } from './collections/definitions/enterprise/enterprise-employee.collection'
import { Subscription } from './collections/definitions/enterprise/subscription.collection'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { TextTheme } from './collections/text/text-theme.collection'
import { TextSystem } from './collections/text/text-system.collection'
import { TextType } from './collections/text/text-type.collection'
import { Jort } from './collections/text/jort.collection'
import { TextHelpRequest } from './collections/text/text-help-request.collection'
import { Text } from './collections/text/text.collection'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Country,
    Address,
    Employee,
    Enterprise,
    EnterpriseEmployee,
    Subscription,
    TextTheme,
    TextSystem,
    TextType,
    Jort,
    Text,
    TextHelpRequest,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [storageAdapter],
})
