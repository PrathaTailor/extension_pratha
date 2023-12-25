/* eslint-disable prettier/prettier */
import styles from './footer.module.scss'
import logo from '../../images/icons/icon-logo-coloured.svg'
import ImgLoader from '@components/ImgLoader'
import sslIcon from '../../images/assets/img-ssl.svg'
import businessIcon from '../../images/assets/img-BBB-Business.svg'
import logoIRSFile from '../../images/assets/img-IRS-E-File.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 330) ||
      currentScrollPos < 320
    )
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.contentWrapper}>
          <Link href="/">
            <ImgLoader
              className={styles.logo}
              src={logo.src}
              height={30}
              width={234}
              alt="Logo"
            />
          </Link>
          <h3 className={styles.footerHeading}>IMPORTANT DISCLAIMERS:</h3>
          <p className={styles.footerContent}>
            Extension.tax is designated as an Authorized IRS e-file Provider. An
            Authorized IRS e-file Provider (Provider) is a business or
            organization authorized by the IRS to participate in the IRS e-file
            program.
          </p>
          <p className={styles.footerSubcontent}>
            *Note that the examples of Unready Eddie, Giggin&apos; Gloria and
            Procrastinating Pete, are all fictional examples of taxpayers. The
            tax and penalty savings calculations are arrived at as a result of
            consideration of the impact of paying (or avoiding) the{' '}
            <span>failure to file</span>, and{' '}
            <span>failure to pay penalty</span>, in addition to the impact of
            taking advantage of additional credits and deductions.
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.iconGroup}>
            <ImgLoader
              className={styles.icon}
              src={sslIcon.src}
              height={60}
              width={60}
              alt="SSL Icon"
            />
            <ImgLoader
              className={styles.icon}
              src={businessIcon.src}
              height={70}
              width={70}
              alt="Business Icon"
            />
            <ImgLoader
              className={styles.icon}
              src={logoIRSFile.src}
              height={50}
              width={50}
              alt="IRS Icon"
            />
          </div>
          <div className={styles.navigationWrapper}>
            <span>
              <Link href="/">Home</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="/login"> Customer Login</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="/contact-us">Contact Us</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="https://blog.extension.tax/" target="_blank">Blog</Link>
            </span>
          </div>
          <div className={styles.navigationWrapper}>
            <span>
              <Link href="/faq">FAQ</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="/terms-of-use">Terms of Use</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </span>
            <span>|</span>
            <span>
              <Link href="/refund-policy">Refund Policy</Link>
            </span>
          </div>
        </div>
      </div>
      <p className={styles.footerComment}>
        © Extension.tax - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
