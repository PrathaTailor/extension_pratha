import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import metaHomeImg from '../images/assets/meta-image-home.png'
import { useEffect, useState } from 'react'
import { queryParamHeaders } from '../config/query-param-headers'
builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('pa-09-home', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
        },
        options: {
          noTargeting: false,
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
  const [content, setContent] = useState(page)
  const [headers, setHeaders] = useState({})

  async function fetchContent() {
    const userAttributes = {
      urlPath: window.location.pathname,
      queryParam: window.location.search,
    }
    builder.setUserAttributes(userAttributes)

    const content = await builder.get('pa-09-home').promise()
    setContent(content)
  }

  const show404 = !content && !isPreviewingInBuilder
  useEffect(() => {
    if (window.location.search) {
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)
      const keyword = String(params.get('kw'))

      let newHeaders: any = queryParamHeaders.find(
        (queryParam) => queryParam.kw === keyword
      )
      if (!newHeaders) {
        newHeaders = {
          heading11: 'Don’t panic. Don’t overpay.',
          heading12: 'Don’t panic. Don’t overpay.',
          subHeading1: 'Extend Your Tax Return through October 15th',
          subHeading2: 'Extend Your Tax Return through October 15th',
        }
      }

      setHeaders({ ...newHeaders, kw: undefined })
      fetchContent()
    }
  }, [router.query])

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>
          Extension.tax - Extend Your Tax Return Through October 16th
        </title>
        <meta
          property="og:title"
          content="Extension.tax - Extend Your Tax Return Through October 16th"
        />
        <meta
          property="og:image"
          content={`${location.origin}${metaHomeImg.src}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Not ready to file your taxes? Extension.tax can help you extend your tax return through October 16th."
        />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <BuilderComponent model="pa-09-home" content={content} data={headers} />
      )}
    </>
  )
}
