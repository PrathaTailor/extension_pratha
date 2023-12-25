/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic'
import { Layout } from '../../../components/Layout'

const OAuthCallbackForm = dynamic(
  () => import('../../../components/login/OAuthCallbackForm') as any,
  { ssr: false }
) as any

function CallbackProvider() {
  return (
    <Layout>
      <OAuthCallbackForm />
    </Layout>
  )
}

export default CallbackProvider
