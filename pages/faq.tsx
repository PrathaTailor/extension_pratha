import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import metaFAQ from '../images/assets/meta-image-FAQ.png'

builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('pa-15-faq', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || 'faq'),
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
        <title>Extension.tax - Frequently Asked Questions</title>
        <meta
          property="og:title"
          content="Extension.tax - Frequently Asked Questions"
        />
        <meta
          property="og:image"
          content={`${location.origin}${metaFAQ.src}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Read our most Frequently Asked Questions and get help filing your tax extension here."
        />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <BuilderComponent model="pa-15-faq" content={page} />
      )}
    </>
  )
}
