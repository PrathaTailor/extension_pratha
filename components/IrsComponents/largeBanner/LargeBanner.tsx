import ImgLoader from '@components/ImgLoader'
import styles from './largeBanner.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import banner from '../../../images/assets/c055-Large-Banner.png'

interface LargeBannerDetails {
  link: string
  banner: string
  lgText: string
  btntext: string
  iconArrowRight: string
}
export const LargeBanner = (props: {
  largeBannerDetails: LargeBannerDetails
}) => {
  const { largeBannerDetails } = props
  const router = useRouter()

  return (
    <div
      className={styles.container}
      onClick={() => router.push(largeBannerDetails.link)}
    >
      <div className={styles.banner}>
        <Image
          src={largeBannerDetails.banner || banner}
          alt="Banner"
          width={678}
          height={275}
        />
      </div>
      <div className={styles.box}>
        <p
          className={styles.lgText}
          dangerouslySetInnerHTML={{
            __html: largeBannerDetails.lgText,
          }}
        />
        <button className={styles.btn}>
          {largeBannerDetails.btntext}
          <ImgLoader
            className={styles.icon}
            src={largeBannerDetails.iconArrowRight}
            width={13}
            height={13}
            alt="Icon Right"
          />
        </button>
      </div>
    </div>
  )
}
