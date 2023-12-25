/* eslint-disable @typescript-eslint/no-explicit-any */
import { OAuthCallback } from '@atomicleads/ext-satellite-form'
import { useRouter } from 'next/router'

const OAuthCallbackForm = () => {
  const router = useRouter()
  const { provider } = router.query

  return <OAuthCallback provider={provider as any} />
}

export default OAuthCallbackForm
