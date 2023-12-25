import styles from './articleHero.module.scss'
import Link from 'next/link'
import ImgLoader from '@components/ImgLoader'

interface HeaderDetails {
  advLinkText: string
  advTitle: string
  advTitleMain: string
  advDesc: string
  articleBanner: string
  authName: string
  avatarIsabel: string
  date: string
  iconCalendar: string
  time: string
  iconTime: string
}
export const ArticleHero = (props: { headerDetails: HeaderDetails }) => {
  const { headerDetails } = props

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.advHero}>
          <p className={styles.pagination}>
            <Link href="/">Extension.Tax</Link> {'>'}
            <span>{headerDetails.advLinkText}</span>
          </p>
          <h3 className={styles.advTitle}>{headerDetails.advTitle}</h3>
          <h2 className={styles.advTitleMain}>{headerDetails.advTitleMain}</h2>
          <p className={styles.advDesc}>{headerDetails.advDesc}</p>
        </div>
      </div>
      <div className={styles.advWrapper}>
        <div className={styles.wrapper}>
          <p className={styles.authorDetails}>
            <span className={styles.authName}>
              <ImgLoader
                className={styles.authAvatar}
                src={headerDetails.avatarIsabel}
                alt="Avatar"
                width={28}
                height={28}
              />
              {headerDetails.authName}
            </span>
            <span className={styles.articleTimeDate}>
              <span className={styles.date}>
                <ImgLoader
                  src={headerDetails.iconCalendar}
                  alt="Icon Date"
                  width={24}
                  height={24}
                />
                {headerDetails.date}
              </span>
              <span className={styles.time}>
                <ImgLoader
                  src={headerDetails.iconTime}
                  alt="Icon Time"
                  width={24}
                  height={24}
                />{' '}
                {headerDetails.time}
              </span>
            </span>
          </p>
        </div>
        <div className={styles.articleBanner}>
          <ImgLoader
            src={headerDetails.articleBanner}
            alt="Banner"
            width={940}
            height={559}
          />
        </div>
      </div>
    </div>
  )
}
