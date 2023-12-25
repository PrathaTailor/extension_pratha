import { Builder } from '@builder.io/react'
import { ContentTriple } from './ContentTriple'
import documentIcon from '../../images/assets/document-checked.svg'
import stopwatchIcon from '../../images/assets/stopwatch.svg'
import authorizeFileIcon from '../../images/assets/authorized-efile.svg'
import ratingIcon from '../../images/assets/ratings.svg'

Builder.registerComponent(ContentTriple, {
  name: 'co45 Content Triple',
  inputs: [
    {
      type: 'text',
      name: 'title',
      defaultValue: 'More reasons to file for an extension with Extension.tax',
    },
    {
      type: 'list',
      name: 'iconDetailList',
      defaultValue: [
        {
          icon: documentIcon,
          title: 'Approval of your application is virtually guaranteed',
          content:
            'The IRS rejects only a small percentage of tax extension applications, with the vast majority of rejections being because the information provided didn’t match the IRS records. As long as the data you provide the IRS matches what they have on file for you, you’re practically guaranteed to be approved for an extension.',
        },
        {
          icon: stopwatchIcon,
          title: 'Fast Confirmation',
          content:
            'When your extension form is submitted, you will receive a confirmation almost instantly, informing you that your application has been received. Once your application is approved, you will receive an additional confirmation from the IRS, usually within 24 hours. Note that ONLY those who file their extension application electronically will receive IRS confirmation.',
        },
        {
          icon: authorizeFileIcon,
          title: 'We are an Authorized IRS E-file Provider',
          content:
            'As an Authorized IRS e-file Provider, we are part of a select group of tax professionals that have been accepted into its electronic filing program. As part of this program, we are required to complete testing with the IRS every year to ensure that our software is operating correctly and that we are following best practices for your security.As an Authorized IRS e-file Provider, we are part of a select group of tax professionals that have been accepted into its electronic filing program. As part of this program, we are required to complete testing with the IRS every year to ensure that our software is operating correctly and that we are following best practices for your security.',
        },
        {
          icon: ratingIcon,
          title: 'World-class customer support',
          content:
            'At Extension.tax, we guide you through the steps of printing and mailing your free federal extension form in just a few minutes. As an authorized IRS e-file provider, we will submit your extension request electronically, confirm that it was received by the IRS, and support you throughout the entire process for a small filing fee.',
        },
      ],
      subFields: [
        {
          name: 'icon',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:
            'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'content',
          type: 'string',
        },
      ],
    },
  ],
})
