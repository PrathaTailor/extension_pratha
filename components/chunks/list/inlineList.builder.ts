import { Builder } from '@builder.io/react'
import InlineList from './InlineList'

Builder.registerComponent(InlineList, {
  name: 'co51 Inline List',
  inputs: [
    {
      type: 'string',
      name: 'inlineListTitle',
      defaultValue:
        'Feel free to click on the links below and jump to the section that interests you most: ',
    },
    {
      type: 'list',
      name: 'listDetails',
      defaultValue: [
        {
          id: '1',
          item: 'Why do you need to file a tax return?',
        },
        {
          id: `2`,
          item: `What happens if you don't file your tax return on time?`,
        },
        {
          id: '3',
          item: 'What can I do to avoid the consequence of late filing?',
        },
        {
          id: '4',
          item: 'Tax extensions and some of the biggest misconceptions',
        },
        {
          id: '5',
          item: 'The BENEFITS and why filing for your tax extension is the smart choice',
        },
        {
          id: '6',
          item: 'So, how do I request a tax extension?',
        },
      ],
      subFields: [
        {
          name: 'id',
          type: 'string',
        },
        {
          name: 'item',
          type: 'string',
        },
      ],
    },
  ],
})
