import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import metaAdvertorial from '../images/assets/meta-image-advertorial.png'

builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('pa-11-advertorial', {
        userAttributes: {
          urlPath:
            '/' + (params?.page?.join('/') || 'personal-tax-deadlines-2023'),
        },
      })
      .toPromise()) || null

  return {
    props: {
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

// export async function getStaticPaths() {
//   const pages = await builder.getAll('page', {
//     options: { noTargeting: true },
//     omit: 'data.blocks',
//   })

//   return {
//     paths: pages.map((page) => `${page.data?.url}`),
//     fallback: true,
//   }
// }

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>
          Extension.tax - Individual Tax Filing Deadlines for 2022 Taxes
        </title>
        <meta
          property="og:title"
          content="Extension.tax - Individual Tax Filing Deadlines for 2022 Taxes"
        />
        <meta
          property="og:image"
          content={`${location.origin}${metaAdvertorial.src}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Learn the 2022 tax year filing deadlines, and the benefits of filing a tax extension."
        />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <BuilderComponent model="pa-11-advertorial" content={page} />
      )}
    </>
  )
}
