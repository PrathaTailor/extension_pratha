import { Builder } from '@builder.io/react'
import { GetExtension } from './GetExtension'
import testimonieimg1 from '../../images/assets/testimonie-img1.svg'
import testimonieimg2 from '../../images/assets/testimonie-img2.svg'
import testimonieimg3 from '../../images/assets/testimonie-img3.svg'

Builder.registerComponent(GetExtension, {
  name: 'co44 Get Extension',
  inputs: [
    {
      type: 'object',
      name: 'getExtTitleDetails',
      defaultValue: {
        getExtTitle:
          'Thinking of getting a tax extension? You’re in good company!',
        getExtSubtitle:
          'Let’s look at three common scenarios for people who file for tax extensions. In each case, extending their tax deadlines saved them money.',
      },
      subFields: [
        {
          name: 'getExtTitle',
          type: 'string',
        },
        {
          name: 'getExtSubtitle',
          type: 'string',
        },
      ],
    },
    {
      type: 'list',
      name: 'imageIconList',
      defaultValue: [
        {
          image: testimonieimg1,
          title: 'Unready Eddie',
        },
        {
          image: testimonieimg2,
          title: 'Giggin’ Gloria',
        },
        {
          image: testimonieimg3,
          title: 'Procrastinating Pete',
        },
      ],
      subFields: [
        {
          name: 'image',
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
      ],
    },
    {
      type: 'list',
      name: 'imageIconDetails',
      defaultValue: [
        {
          title: 'He usually files on time. This year, life got in the way.',
          content1:
            'Meet Eddie, a hard-working plumber who goes to work every day, pays his bills and supports his family. Last year, Eddie’s  daughter was hospitalized 2 weeks before the tax deadline, and between going to work and giving his child the attention and care she needed, he simply didn’t have time to prepare his taxes. Eddie knows that each year he owes about $10,000 in taxes, and he’s able to pay, but he knows he’ll never meet the filing deadline.',
          content2:
            'Fortunately, Eddie did the right thing and took a few minutes to file for a tax extension. When he finally filed two months later, he found that his actual liability was $11,500! If he hadn’t filed an extension, he would have owed an exorbitant Failure to File Penalty. <b>Eddie just saved himself $1,150!*</b>',
        },
        {
          title:
            'Gig workers like Gloria can’t afford to miss the credits they’re owed.',
          content1:
            ' Gloria is a freelance writer for blogs and small newspapers, working as an Uber driver to fill in the gaps. Gloria knows that gig economy workers like her are eligible for all kinds of deductions and credits, but when tax day rolled around, she hadn’t completed her research on how much she could claim, and the IRS instructions were confusing.According to her back- of - the - envelope calculations, she figured she owed around $3, 500. She considered simply sending in the payment with her return, but instead, she did the smart thing and filed for an extension and took more time to get it right.',
          content2:
            'Three months later, Gloria was able to take the time she needed to find the credits and deductions that reduced her liability to just $1,850! <b>Gloria just saved herself $1,622!*</b>',
        },
        {
          title:
            'He always puts things off until the last minute. This time it paid off.',
          content1:
            ' We all know Procrastinating Pete. We’ve probably all been Procrastinating Pete at some point. Pete does everything at the last minute, and his taxes are no exception. The night before the tax deadline, he finally found some time to get started. However, the past year was particularly complicated. He got divorced, moved to another state, and enrolled in night classes at the local community college to get his degree. When faced with this mountain of financial paperwork, he felt overwhelmed. He needed more time.Fortunately for Pete, it wasn’t too late to e-file for an extension. By taking just a few moments to fill out a simple form, he was able to buy himself an extra six months to file. Over the next five months, he carved out a little time each day to work on his return, and when he was done, he found that the amount he owed the IRS was $5,600. Thanks to the extension, Pete avoided the 5% Failure to File Penalty. <b> By taking five minutes to file for an extension, Pete saved himself $1,260!* </b>',
          content2: '',
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'content1',
          type: 'string',
        },
        {
          name: 'content2',
          type: 'string',
        },
      ],
    },
  ],
})
