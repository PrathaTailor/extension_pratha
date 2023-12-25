import { Builder } from '@builder.io/react'
import { Testimonials } from './Testimonials'
import testimonieimg4 from '../../images/assets/testimonie-img4.svg'
import testimonieimg5 from '../../images/assets/testimonie-img5.svg'
import testimonieimg6 from '../../images/assets/testimonie-img6.svg'

Builder.registerComponent(Testimonials, {
  name: 'co46 Testimonials',
  inputs: [
    {
      type: 'string',
      name: 'title',
      defaultValue:
        'See what some of the hundreds of thousands of satisifed customers have to say about our services:',
    },
    {
      type: 'list',
      name: 'testimonailDetails',
      defaultValue: [
        {
          profileImg: testimonieimg4,
          name: 'Daniel T',
          reviewTitle: 'Amazing',
          reviewContent:
            'The software and customer support are the best. I had a number of different forms to fill out and they walked me through all of them. Would recommend.',
        },
        {
          profileImg: testimonieimg5,
          name: 'Karen S ',
          reviewTitle: 'Very happy customer! 👍',
          reviewContent:
            'Very impressed with this co. It was easy to file an extension and the professionalism is outstanding. Response to my questions were very quick. I highly recommend! Good job!',
        },
        {
          profileImg: testimonieimg6,
          name: 'Todd',
          reviewTitle: 'The real deal',
          reviewContent:
            'These guys do a great job we had a problem with the extension and it was resolved asap, very organized site. I was a super concerned, but they do a great job.',
        },
      ],
      subFields: [
        {
          name: 'profileImg',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'reviewTitle',
          type: 'string',
        },
        {
          name: 'reviewContent',
          type: 'string',
        },
      ],
    },
  ],
})
