import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import builderConfig from '@config/builder'
import Script from 'next/script'

// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import metaContactUs from '../images/assets/meta-image-contact-us.png'

builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('pa-10-contact-us', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || 'contact-us'),
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
        <title>Extension.tax - Contact Us</title>
        <meta property="og:title" content="Extension.tax - Contact Us" />
        <meta
          property="og:image"
          content={`${location.origin}${metaContactUs.src}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ask up to 5 questions per month here as part of your Extension.tax membership."
        />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        <>
          <BuilderComponent model="pa-10-contact-us" content={page} />
          <Script strategy="lazyOnload" id="dpScript">
            {`
            var DpNewTicket_Options = DpNewTicket_Options || {};
            DpNewTicket_Options.protocol = ('https:' == document.location.protocol ? 'https' : 'http');
            DpNewTicket_Options.deskproUrl = DpNewTicket_Options.protocol + '://helpdesk.file-tax.net/';
            DpNewTicket_Options.initialHeight = 700;
            DpNewTicket_Options.containerId = 'dp_newticket_form';
            DpNewTicket_Options.departmentId = 6;

            /**
            * The Language ID to load for users with no language preference
            */
            DpNewTicket_Options.languageId = 0;

            /**
            * If the user name is already known, you can set it here.
            * When set, the name field is hidden in the form.
            */
            DpNewTicket_Options.formUserName = '';

            /**
            * If the user email is already known, you can set it here.
            * When set, the email field is hidden in the form.
            */
            DpNewTicket_Options.formUserEmail = '';

            if (document.getElementsByTagName) {
              (function() {
                var scr = document.createElement('script');
                scr.type = 'text/javascript';
                scr.async = true;
                scr.src = DpNewTicket_Options.protocol + '://helpdesk.file-tax.net/web/javascripts/DeskPRO/User/TicketFormWidget/TicketFormWidget.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(scr);
              })();
            }
          `}
          </Script>
        </>
      )}
    </>
  )
}
