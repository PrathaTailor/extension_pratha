import { Builder } from '@builder.io/react'
import { ContentSingleIcon } from './ContentSingleIcon'
import doubleQuestionIcon from '../../images/assets/double-questionmark.svg'

Builder.registerComponent(ContentSingleIcon, {
  name: 'co43 Content Single w/ Icon',
  inputs: [
    {
      type: 'object',
      name: 'contentSingleDetails',
      defaultValue: {
        doubleQuestionIcon: doubleQuestionIcon,
        regExtTitle: 'Why should I file an extension?',
        regExtsubtitle:
          'Filing your taxes can be stressful. We get it. Your life has gotten busy, and you’re overwhelmed by a mountain of complicated financials. Giving yourself extra time helps you avoid mistakes and minimize your tax liability.',
      },
      subFields: [
        {
          name: 'doubleQuestionIcon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'regExtTitle',
          type: 'string',
        },
        {
          name: 'regExtsubtitle',
          type: 'string',
        },
      ],
    },
  ],
})
