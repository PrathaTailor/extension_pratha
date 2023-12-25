import { Builder } from '@builder.io/react'
import { RelatedContent } from './RelatedContent'
import banner from '../../../images/assets/related-content-banner.png'
import banner2 from '../../../images/assets/related-content-banner-2.png'
import banner3 from '../../../images/assets/related-content-banner-3.png'

Builder.registerComponent(RelatedContent, {
  name: 'co71 Related Content',
  inputs: [
    {
      type: 'string',
      name: 'title',
      defaultValue: 'Related content',
    },
    {
      type: 'list',
      name: 'blockDetails',
      defaultValue: [
        {
          banner: banner,
          blockTitle:
            'Filing a 1099 as a US taxpayer is a simple process that can be done online or by mail',
          content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  imperdiet interdum congue. Quisque luctus sagittis ipsum nec
                  rutrum. Donec posuere nulla et suscipit consequat aenean`,
          link: '/',
        },
        {
          banner: banner2,
          blockTitle:
            'Filing a 1099 as a US taxpayer is a simple process that can be done online or by mail',
          content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  imperdiet interdum congue. Quisque luctus sagittis ipsum nec
                  rutrum. Donec posuere nulla et suscipit consequat aenean`,
          link: '/',
        },
        {
          banner: banner3,
          blockTitle:
            'Filing a 1099 as a US taxpayer is a simple process that can be done online or by mail',
          content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  imperdiet interdum congue. Quisque luctus sagittis ipsum nec
                  rutrum. Donec posuere nulla et suscipit consequat aenean`,
          link: '/',
        },
      ],
      subFields: [
        {
          name: 'banner',
          type: 'file',
        },
        {
          name: 'blockTitle',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
        {
          name: 'link',
          type: 'string',
        },
      ],
    },
  ],
})
