/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Builder, builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import '@atomicleads/ext-satellite-form/index.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/400-italic.css'
import '@fontsource/mulish/600.css'
import '@fontsource/mulish/800.css'
import '@fontsource/mulish/900.css'
import Script from 'next/script'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import '../styles/_colors.scss'
import '../styles/_fonts.scss'
import '../styles/_reset.scss'
import '../styles/_variable.scss'
import '../components/header/header.builder'
import '../components/headerMenu/headerMenu.builder'
import '../components/footer/footer.builder'
import '../components/hero/hero.builder'
import '../components/contentSingleIcon/contentSingleIcon.builder'
import '../components/getExtension/getExtension.builder'
import '../components/contentTriple/contentTriple.builder'
import '../components/testimonials/testimonials.builder'
import '../components/privacy/privacy.builder'
import '../components/refund/refund.builder'
import '../components/termsOfUse/termsOfUse.builder'
import '../components/contact/contact.builder'
import '../components/faq/faq.builder'
import '../components/chunks/richtext/richtext.builder'
import '../components/chunks/alert/inlineAlert.builder'
import '../components/chunks/list/inlineList.builder'
import '../components/chunks/smallBanner/smallBanner.builder'
import '../components/chunks/articleHero/articleHero.builder'
import '../components/chunks/boxedImage/boxedImage.builder'
import '../components/chunks/largeBanner/largeBanner.builder'
import '../components/chunks/largeBannerv2/largeBannerv2.builder'
import '../components/chunks/blogTitle/blogTitle.builder'
import '../components/chunks/blogSubtile/blogSubtitle.builder'
import '../components/chunks/blogContent/blogContent.builder'
import '../components/chunks/blogQuestion/blogQuestion.builder'
import '../components/chunks/blogColumnContent/blogColumnContent.builder'
import '../components/chunks/testimonialAuthor/testimonialAuthor.builder'
import '../components/chunks/relatedContent/relatedContent.builder'
import '../components/cta/cta.builder'

// IRS-EXTENSION IMPORT START
import '../components/IrsComponents/header/header.builder'
import '../components/IrsComponents/footer/footer.builder'
import '../components/IrsComponents/richtext/richtext.builder'
import '../components/IrsComponents/alert/inlineAlert.builder'
import '../components/IrsComponents/list/inlineList.builder'
import '../components/IrsComponents/smallBanner/smallBanner.builder'
import '../components/IrsComponents/articleHero/articleHero.builder'
import '../components/IrsComponents/boxedImage/boxedImage.builder'
import '../components/IrsComponents/largeBanner/largeBanner.builder'
import '../components/IrsComponents/largeBannerv2/largeBannerv2.builder'
import '../components/IrsComponents/blogTitle/blogTitle.builder'
import '../components/IrsComponents/blogSubtile/blogSubtitle.builder'
import '../components/IrsComponents/blogContent/blogContent.builder'
import '../components/IrsComponents/blogNotes/blogNotes.builder'
import '../components/IrsComponents/blogQuestion/blogQuestion.builder'
import '../components/IrsComponents/blogColumnContent/blogColumnContent.builder'
import '../components/IrsComponents/testimonialAuthor/testimonialAuthor.builder'
import '../components/IrsComponents/relatedContent/relatedContent.builder'

import dynamic from 'next/dynamic'
/// <reference> ../config/gtm.d.ts
import TagManager from 'react-gtm-module-custom-domain'
import cfg from '../config/builder'

builder.init(builderConfig.apiKey)

const Providers = dynamic(() => import('../components/Providers') as any, {
  ssr: false,
}) as any

// Add your public apiKey here
builder.init(cfg.apiKey)

// Remove this to allow all built-in components to be used too
const OVERRIDE_INSERT_MENU = false

if (OVERRIDE_INSERT_MENU) {
  // (optionally) use this to hide all default built-in components and fully manage
  // the insert menu components and sections yourself
  Builder.register('editor.settings', { customInsertMenu: true })
}

// (optionally) set these to add your own sections of components arranged as you choose.
// this can be used with or without `customInsertMenu` above

Builder.register('insertMenu', {
  name: 'Content components',
  items: [
    { name: 'co15 Faq' },
    { name: 'co43 Content Single w/ Icon' },
    { name: 'co44 Get Extension' },
    { name: 'co45 Content Triple' },
    { name: 'co49 Rich Text' },
    { name: 'co49 Blog Title' },
    { name: 'co49 Blog Subtitle' },
    { name: 'co49 Blog Content' },
    { name: 'co49 Blog Question Answer' },
    { name: 'co49 Blog Column Content' },
    { name: 'co50 Inline Alert' },
    { name: 'co51 Inline List' },
    { name: 'co54 Boxed Image' },
    { name: 'co70 Testimonial Author' },
    { name: 'co71 Related Content' },
  ],
})

Builder.register('insertMenu', {
  name: 'IRS-Extension Components',
  items: [
    { name: 'IRS co39 Header' },
    { name: 'IRS co39 Footer' },
    { name: 'IRS co49 Blog Title' },
    { name: 'IRS co49 Blog Subtitle' },
    { name: 'IRS co49 Blog Content' },
    { name: 'IRS co49 Rich Text' },
    { name: 'IRS co49 Blog Column Content' },
    { name: 'IRS co49 Blog Question Answer' },
    { name: 'IRS co49 Blog Notes' },
    { name: 'IRS co50 Inline Alert' },
    { name: 'IRS co51 Inline List' },
    { name: 'IRS co52 SmallBanner' },
    { name: 'IRS co53 Article Hero' },
    { name: 'IRS co54 Boxed Image' },
    { name: 'IRS co55 Large Banner' },
    { name: 'IRS co55 Large Banner v2' },
    { name: 'IRS co70 Testimonial Author' },
    { name: 'IRS co71 Related Content' },
  ],
})

Builder.register('insertMenu', {
  name: 'Headers & Footers components',
  items: [
    { name: 'co39 Header' },
    { name: 'co47 Footer' },
    { name: 'co47 Sticky CTA' },
    { name: 'co48 Header Menu' },
  ],
})

Builder.register('insertMenu', {
  name: 'Hero components',
  items: [{ name: 'co42 Hero Section' }, { name: 'co53 Article Hero' }],
})

Builder.register('insertMenu', {
  name: 'Sales components',
  items: [
    { name: 'co46 Testimonials' },
    { name: 'co52 SmallBanner' },
    { name: 'co55 Large Banner' },
    { name: 'co55 Large Banner v2' },
  ],
})

Builder.register('insertMenu', {
  name: 'Form components',
  items: [{ name: 'pa10 Contact Us' }],
})

Builder.register('insertMenu', {
  name: 'Legal components',
  items: [
    { name: 'co72 Privacy Policy' },
    { name: 'co73 Refund Policy' },
    { name: 'co74 Terms of Use' },
  ],
})
export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tagManagerArgs = {
    gtmId: cfg.gtmCode,
    customURL: 'https://sgtm.extension.tax/gran_tour_monaco.js',
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  if (!showChild) {
    return null
  }
  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-T429GHR`}
        />

        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'GTM-T429GHR', {
                    page_path: window.location.pathname,
                    });

                    window.builderWcLoadCallbacks = [function (context) {
                        return context.builder.setUserAttributes({
                        /* Add your targeting attributes for Builder
                        * to dynamically load content to the web component above
                        */
                        queryParam: window.location.search
                        });
                    }];
                `}
        </Script>
        <Script strategy="lazyOnload">
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

        <Head>
          <title>Extension.tax</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Providers>
          <Component {...pageProps} />
        </Providers>
      </>
    )
  }
}
