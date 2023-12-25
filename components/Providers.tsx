/* eslint-disable @typescript-eslint/no-explicit-any */
import { SatelliteFormProvider } from '@atomicleads/ext-satellite-form'
import axios from 'axios'
import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface ProvidersProps {
  children?: ReactNode
}

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SatelliteFormProvider
      clientId={clientId}
      theme="satellite"
      axios={axios}
      Router={Router as any}
      Link={Link as any}
      Image={Image as any}
    >
      {children}
    </SatelliteFormProvider>
  )
}

export default Providers
