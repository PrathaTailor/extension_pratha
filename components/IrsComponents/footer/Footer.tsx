import styles from './footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logoIRS from '../../../images/assets/irs-extension-online-logo-white.png'
import logoSSL from '../../../images/assets/logo-ssl-transaction.png'
import logoBBB from '../../../images/assets/logo-bbb-accredited-business.png'
import logoIRSeFile from '../../../images/assets/logo-IRS-efile-provider.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <Image
              src={logoIRS.src}
              className={styles.logo}
              alt="Logo IRS"
              width={212}
              height={40}
            />
            <h4 className={styles.title}>Important Disclaimers:</h4>
            <p>
              irs-extension.online is designated as an Authorized IRS e-file
              Provider. An Authorized IRS e-file Provider (Provider) is a
              business or organization authorized by the IRS to participate in
              the IRS e-file program.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.half}>
              <h4 className={styles.title}>LINKS</h4>
              <ul className={styles.list}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/login"> Customer Login </Link>
                </li>
                <li>
                  <Link href="/contact-us"> Contact Us </Link>
                </li>
                <li>
                  <Link href="https://blog.irs-extension.online">Blog</Link>
                </li>
              </ul>
            </div>
            <div className={styles.half}>
              <h4 className={styles.title}>ABOUT</h4>
              <ul className={styles.list}>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.logos}`}>
          <Image
            className={styles.logo}
            src={logoSSL}
            alt="Logo SSL"
            width={65}
            height={65}
          />
          <Image
            className={styles.logo}
            src={logoBBB}
            alt="Logo BBB"
            width={65}
            height={65}
          />
          <Image
            className={styles.logo}
            src={logoIRSeFile}
            alt="Logo IRS eFile"
            width={65}
            height={65}
          />
        </div>
        <div className={`${styles.row} ${styles.footerBottom}`}>
          &copy;2023
          <a href="https://irs-extension.online">IRS-Extension.online</a>
          All right reserved
        </div>
      </div>
    </div>
  )
}
