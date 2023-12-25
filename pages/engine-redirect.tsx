/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic'
import { Layout } from '../components/Layout'

const EngineRedirectForm = dynamic(
  () => import('../components/registration/EngineRedirectForm') as any,
  { ssr: false }
) as any

export default function EngineRedirect() {
  return (
    <Layout>
      <EngineRedirectForm />
    </Layout>
  )
}
