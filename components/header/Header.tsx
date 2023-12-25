import styles from './header.module.scss'
import ImgLoader from '../ImgLoader'
import logo from '../../images/icons/icon-logo.png'
import logoColored from '../../images/icons/icon-logo-coloured.png'
import { Button } from '@components/button/Button'
import Link from 'next/link'

export const Header = (props: {
  visibility: boolean
  centered: boolean
  whiteBg: boolean
}) => {
  const { visibility, centered, whiteBg } = props
  return (
    <div className={whiteBg ? styles.whiteBgContainer : styles.headerContainer}>
      <div
        className={centered ? styles.centeredLogoWrapper : styles.headerWrapper}
      >
        <Link href="/">
          <div className={styles.logoWrapper}>
            <ImgLoader
              className={styles.logo}
              src={whiteBg ? logoColored.src : logo.src}
              height={20}
              width={170}
              alt="Logo"
            />
          </div>
        </Link>
        {visibility === true && (
          <div className={styles.btnWrapper}>
            <Button id="cta-btn" color={'transparent'} link={'/registration'}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
