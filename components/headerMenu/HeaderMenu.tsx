import styles from './headerMenu.module.scss'
import hamburgerIcon from '../../images/icons/icon-hamburger.svg'
import ImgLoader from '@components/ImgLoader'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderList {
  title: string
  link: string
}

export const HeaderMenu = (props: { headerList: HeaderList[] }) => {
  const { headerList = [] } = props
  const active = window.location.pathname
  const [isMobileView, setIsMobileView] = useState(false)
  const width = 991
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleResize = () => {
    if (window.innerWidth < width) {
      setIsMobileView(true)
    } else {
      setIsMobileView(false)
    }
  }

  useEffect(() => {
    window.innerWidth < width ? setIsMobileView(true) : setIsMobileView(false)
    window.addEventListener('resize', handleResize)
  }, [width])
  return (
    <div className={styles.navWrapper}>
      {isMobileView === false ? (
        <ul className={styles.navbarContainer}>
          {headerList &&
            headerList.map((listItem: HeaderList, index: number) => {
              return (
                <li key={index}>
                  <Link
                    className={active === listItem.link ? styles.active : ''}
                    href={listItem.link}
                  >
                    {listItem.title}
                  </Link>
                </li>
              )
            })}
        </ul>
      ) : (
        <>
          <div
            onClick={toggleMenu}
            style={{
              background: isMenuOpen ? '#F9F5FF' : 'transparent',
            }}
            className={styles.toggleWrapper}
          >
            <div className={styles.menuIconWrapper}>
              <ImgLoader
                src={hamburgerIcon}
                height={30}
                width={30}
                alt="Hamburger"
                className={styles.iconMenu}
              />
            </div>
            {isMenuOpen && (
              <ul className={styles.navbarSmallContainer}>
                {headerList &&
                  headerList.map((listItem: HeaderList, index: number) => {
                    return (
                      <li
                        key={index}
                        className={
                          active === listItem.link ? styles.active : ''
                        }
                      >
                        <Link href={listItem.link}>{listItem.title}</Link>
                      </li>
                    )
                  })}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  )
}
