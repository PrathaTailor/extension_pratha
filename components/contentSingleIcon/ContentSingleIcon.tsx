import styles from './contentSingleIcon.module.scss'
import ImgLoader from '@components/ImgLoader'
import ImageObj from '@components/utils/interfaces'

interface ContentSingleDetails {
  doubleQuestionIcon: ImageObj
  regExtTitle: string
  regExtsubtitle: string
}
export const ContentSingleIcon = (props: {
  contentSingleDetails: ContentSingleDetails
}) => {
  const { contentSingleDetails } = props
  return (
    <div className={styles.regExtContainer}>
      <div>
        <ImgLoader
          src={contentSingleDetails.doubleQuestionIcon.src}
          width={182}
          height={157}
          alt="Double Question Icon"
        />
      </div>
      <div className={styles.regExtContentWrapper}>
        <p className={styles.regExtTitle}>{contentSingleDetails.regExtTitle}</p>
        <p className={styles.regExtsubtitle}>
          {contentSingleDetails.regExtsubtitle}
        </p>
      </div>
    </div>
  )
}
