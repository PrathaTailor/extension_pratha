/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from '../components/Layout'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import metaForgotPassword from '../images/assets/meta-image-forgot-password.png'

const ForgotPasswordForm = dynamic(
  () => import('../components/login/ForgotPasswordForm') as any,
  { ssr: false }
) as any

const Forgot = () => {
  return (
    <>
      <Head>
        <title>Extension.tax - Forgot Your Password?</title>
        <meta
          property="og:title"
          content="Extension.tax - Forgot Your Password?"
        />
        <meta
          property="og:image"
          content={`${location.origin}${metaForgotPassword.src}`}
        />
        <meta
          name="description"
          content="Forgot your password? Simply input your email address and we’ll send you a recovery link."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="auth-wrap">
          <ForgotPasswordForm />
        </div>
      </Layout>
    </>
  )
}

export default Forgot
