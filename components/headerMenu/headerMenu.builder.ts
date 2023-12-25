import { Builder } from '@builder.io/react'
import { HeaderMenu } from './HeaderMenu'

Builder.registerComponent(HeaderMenu, {
  name: 'co48 Header Menu',
  inputs: [
    {
      type: 'list',
      name: 'headerList',
      defaultValue: [
        {
          title: 'Home',
          link: '/',
        },
        {
          title: 'Blog',
          link: 'https://blog.extension.tax/',
        },
        {
          title: 'FAQ',
          link: '/faq',
        },
        {
          title: 'Contact Us',
          link: '/contact-us',
        },
        {
          title: 'Terms of Use',
          link: '/terms-of-use',
        },
        {
          title: 'Privacy Policy',
          link: '/privacy-policy',
        },
        {
          title: 'Refund Policy',
          link: '/refund-policy',
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
  ],
})
