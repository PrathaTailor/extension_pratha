import { Builder } from '@builder.io/react'
import { Hero } from './Hero'
import startedcostimg from '../../images/assets/started-cost-img.svg'
import startedcalimg from '../../images/assets/started-cal-img.svg'
import videoImg from '../../images/assets/video-headline.png'

Builder.registerComponent(Hero, {
  name: 'co42 Hero Section',
  inputs: [
    {
      type: 'object',
      name: 'heroSection',
      defaultValue: {
        heading: 'Don’t panic. Don’t overpay.',
        subHeading: 'Extend Your Tax Return through <span>October 15th</span>',
        startedcostimg: startedcostimg,
        btnText: 'Get Started',
        startedcalimg: startedcalimg,
        contentHeading:
          ' Maximize your refund or reduce the taxes you owe by taking the time to do your taxes RIGHT.',
        content:
          'Racing to file your taxes can feel overwhelming, but ignoring the tax deadline can be <b>a costly mistake.</b> If you owe tax, and don’t pay or file, you will be subject to the <b> Failure to File Penalty</b> (up to 25% of taxes owed!) Fortunately, filing an extension prevents this penalty, and may result in <b>more savings</b> on your tax liability by  <b> giving you extra time to claim every credit and deduction you are entitled to.</b>',
        videoImg: videoImg,
        videoLink:
          'https://file-tax.s3.amazonaws.com/uploads/video/ty-2022/extension.tax/extension.tax1.mp4',
      },
      subFields: [
        {
          name: 'heading',
          type: 'string',
        },
        {
          name: 'subHeading',
          type: 'string',
        },
        {
          name: 'startedcostimg',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'btnText',
          type: 'string',
        },
        {
          name: 'startedcalimg',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'contentHeading',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
        {
          name: 'videoImg',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'videoLink',
          type: 'string',
        },
      ],
    },
  ],
})
