import { builder } from '@builder.io/react';
import { useRouter } from 'next/router'
import styles from './button.module.scss'

interface ButtonProps {
  children: string
  color: string
  link: string
  id: string
}

export const Button = ({ children, color, link, id }: ButtonProps) => {
  const router = useRouter()

  return (
    <button
      id={id}
      onClick={() => {
        builder.track('ctaButtonClick')
        router.push(link)
      }}
      className={`${styles.button} ${styles[color]} cta-btn`}
    >
      {children}
    </button>
  )
}
