import ImgLoader from '@components/ImgLoader'
import styles from './contentTriple.module.scss'
import ImageObj from '@components/utils/interfaces'
interface IconDetailList {
  icon: ImageObj
  title: string
  content: string
}
export const ContentTriple = (props: {
  title: string
  iconDetailList: IconDetailList[]
}) => {
  const { title, iconDetailList } = props
  return (
    <div className={styles.reasonContainer}>
      <h1>{title}</h1>
      <div className={styles.reasonWrapper}>
        {iconDetailList &&
          iconDetailList.map((item: IconDetailList, index: number) => {
            return (
              <div key={index} className={styles.reasonSection}>
                <div className={styles.reasonImgWrapper}>
                  <ImgLoader
                    className={styles.reasonImage}
                    src={item.icon.src}
                    height={item.icon.height}
                    width={item.icon.width}
                    alt="Icon for List"
                  />
                </div>
                <div className={styles.reasonContentWrapper}>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
