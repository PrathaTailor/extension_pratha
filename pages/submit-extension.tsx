/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import metaRegister from '../images/assets/meta-image-registration.png'

const RegistrationForm = dynamic(
  () => import('../components/registration/RegistrationForm') as any,
  { ssr: false }
) as any

export default function SubmitExtension() {
  return (
    <>
      <Head>
        <title>Extension.tax - Registration Page</title>
        <meta property="og:title" content="Extension.tax - Registration Page" />
        <meta
          property="og:image"
          content={`${location.origin}${metaRegister.src}`}
        />
        <meta
          name="description"
          content="Register here for your Extension.tax account."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="registration">
          <RegistrationForm productFocus="extension" />
        </div>
      </Layout>
    </>
  )
}
