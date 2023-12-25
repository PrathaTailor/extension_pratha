/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import metaLogin from '../images/assets/meta-image-login.png'

const LoginForm = dynamic(
  () => import('../components/login/LoginForm') as any,
  { ssr: false }
) as any

function Login() {
  return (
    <>
      <Head>
        <title>Extension.tax - Login Page</title>
        <meta property="og:title" content="Extension.tax - Login Page" />
        <meta
          property="og:image"
          content={`${location.origin}${metaLogin.src}`}
        />
        <meta
          name="description"
          content="Log in here to access your Extension.tax account."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="login">
          <LoginForm />
        </div>
      </Layout>
    </>
  )
}

export default Login
