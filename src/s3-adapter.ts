import { s3Storage } from '@payloadcms/storage-s3'

export const storageAdapter = s3Storage({
  collections: {
    media: true,
  },
  bucket: process.env.S3_BUCKET_NAME as string,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_KEY!,
    },
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
  },
})
