import { FC, ReactNode } from 'react'
import { Header } from '@components/header/Header'
import Footer from '@components/footer/Footer'

export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header visibility={false} centered={false} whiteBg={false} />
      {children}
      <Footer />
    </div>
  )
}
