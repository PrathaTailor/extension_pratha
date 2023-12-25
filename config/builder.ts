if (!process.env.BUILDER_PUBLIC_KEY) {
  throw new Error(
    'Missing environment variable BUILDER_PUBLIC_KEY, signup for builder.io and add your public key to env file'
  )
}
if (!process.env.GTM_CODE) {
  throw new Error('Missing environment variable GTM_CODE')
}

export default {
  apiKey: process.env.BUILDER_PUBLIC_KEY,
  gtmCode: process.env.GTM_CODE,
}
