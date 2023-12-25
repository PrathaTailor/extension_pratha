import styles from './header.module.scss'
import logoIRS from '../../../images/assets/irs-extension-online-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logoIRS.src}
            alt="Logo IRS"
            width={258}
            height={50}
          />
        </Link>
      </div>
    </div>
  )
}
