/* eslint-disable prettier/prettier */
import { builder } from '@builder.io/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './cta.module.scss'

export const Cta = () => {
  const router = useRouter()
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
    <div
      style={{ bottom: visible ? '-100px' : '0px' }}
      className={`${styles.stickyfooter} ${styles.resBtnWrapper} `}
    >
      <div className={styles.stickyfooterbox}>
        <div className={styles.stickyfooterp1}>
          <h6>File your extension today!</h6>
        </div>
        <div className={styles.stickyfooterp2}>
          <button
            id="sticky-cta"
            className="cta-btn"
            onClick={() => {
              builder.track('ctaButtonClick');
              router.push('/registration')
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
