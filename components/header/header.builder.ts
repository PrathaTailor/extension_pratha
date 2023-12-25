import { Builder } from '@builder.io/react'
import { Header } from './Header'

Builder.registerComponent(Header, {
  name: 'co39 Header',
  inputs: [
    {
      type: 'boolean',
      name: 'visibility',
      defaultValue: false,
    },
    {
      type: 'boolean',
      name: 'centered',
      defaultValue: false,
    },
    {
      type: 'boolean',
      name: 'whiteBg',
      defaultValue: false,
    },
  ],
})
