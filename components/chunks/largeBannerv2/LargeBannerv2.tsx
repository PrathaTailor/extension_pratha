import styles from './largeBannerv2.module.scss'
import ImgLoader from '@components/ImgLoader'
import { useRouter } from 'next/router'

interface LargeBannerDetails {
  link: string
  banner: string
  lgText: string
  btntextLg: string
  btntextSm: string
  iconArrowRight: string
}
export const LargeBannerv2 = (props: {
  largeBannerDetails: LargeBannerDetails
}) => {
  const { largeBannerDetails } = props
  const router = useRouter()
  return (
    <div
      className={styles.container}
      onClick={() => router.push(largeBannerDetails?.link)}
    >
      <div className={styles.banner}>
        <ImgLoader
          src={largeBannerDetails.banner}
          alt="Banner"
          width={678}
          height={275}
        />
      </div>
      <div className={styles.box}>
        <p
          className={styles.lgText}
          dangerouslySetInnerHTML={{
            __html: largeBannerDetails?.lgText,
          }}
        />
        <button className={styles.btn}>
          <span className={styles.btnText}>
            <span className={styles.lg}>{largeBannerDetails?.btntextLg}</span>
            <span className={styles.sm}>{largeBannerDetails?.btntextSm}</span>
          </span>
          <ImgLoader
            className={styles.icon}
            src={largeBannerDetails?.iconArrowRight}
            width={13}
            height={13}
            alt="Icon Right"
          />
        </button>
      </div>
    </div>
  )
}
