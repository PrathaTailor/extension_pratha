import ImgLoader from '@components/ImgLoader'
import styles from './hero.module.scss'
import videobg1 from '../../images/assets/video-bg-1.svg'
import videobg2 from '../../images/assets/video-bg-2.svg'
import ImageObj from '@components/utils/interfaces'
import { Button } from '@components/button/Button'
interface HeroSection {
  heading: string
  subHeading: string
  startedcostimg: ImageObj
  btnText: string
  startedcalimg: ImageObj
  contentHeading: string
  content: string
  videoImg: string
  videoLink: string
}

export const Hero = (props: { heroSection: HeroSection }) => {
  const { heroSection } = props
  return (
    <div className={styles.headlineContainer}>
      <p className={styles.heading}>
        <i>{heroSection.heading}</i>
      </p>
      <p
        className={styles.subHeading}
        dangerouslySetInnerHTML={{
          __html: heroSection.subHeading,
        }}
      />
      <div className={styles.newgetstarted}>
        <div className={styles.newgetstartedp1}>
          <ImgLoader
            className={styles.image}
            src={heroSection.startedcostimg.src}
            alt="video image"
            height={150}
            width={150}
          />
        </div>
        <div className={styles.newgetstartedp2}>
          <Button id="cta-hero" link="/registration" color="bgBlue">
            {heroSection.btnText}
          </Button>
        </div>
        <div className={styles.newgetstartedp3}>
          <ImgLoader
            className={styles.image}
            src={heroSection.startedcalimg.src}
            alt="startedcalimg"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className={styles.videoContainer}>
        <div className={styles.contentWrapper}>
          <p className={styles.contentHeading}>{heroSection.contentHeading}</p>
          <p
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: heroSection.content,
            }}
          />
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.videobg1}>
            <ImgLoader
              className={styles.image}
              src={videobg1.src}
              alt="startedcalimg"
              height={172}
              width={172}
            />
          </div>
          <video
            className={styles.image}
            poster={heroSection.videoImg}
            controls
            width="432"
            height="288"
          >
            <source src={heroSection.videoLink} type="video/mp4" />
          </video>
          <div className={styles.videobg2}>
            <ImgLoader
              className={styles.image}
              src={videobg2.src}
              alt="startedcalimg"
              height={150}
              width={150}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
