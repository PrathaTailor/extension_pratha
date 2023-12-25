/* eslint-disable prettier/prettier */
import ImgLoader from '@components/ImgLoader'
import styles from './getExtension.module.scss'
// import testimonieimg1 from '../../images/assets/testimonie-img1.svg'
// import testimonieimg2 from '../../images/assets/testimonie-img2.svg'
// import testimonieimg3 from '../../images/assets/testimonie-img3.svg'
import { useState } from 'react'
import ImageObj from '@components/utils/interfaces'
interface GetExtTitleDetails {
  getExtTitle: string
  getExtSubtitle: string
}
interface ImageIconList {
  image: ImageObj
  title: string
}
interface ImageIconDetails {
  title: string
  content1: string
  content2: string
}
export const GetExtension = (props: {
  getExtTitleDetails: GetExtTitleDetails
  imageIconList: ImageIconList[]
  imageIconDetails: ImageIconDetails[]
}) => {
  const {
    getExtTitleDetails,
    imageIconList = [],
    imageIconDetails = [],
  } = props
  const [styleClass, setStyleClass] = useState(styles.getExtContainerp1)
  const [isActive, setIsActive] = useState(0)
  return (
    <div className={styleClass}>
      <div className={styles.getExtContainer}>
        <div className={styles.getExtTitleWrapper}>
          <p className={styles.getExtTitle}>
            {getExtTitleDetails?.getExtTitle}
          </p>
          <p className={styles.getExtSubtitle}>
            {getExtTitleDetails.getExtSubtitle}
          </p>
        </div>
        <div className={styles.thinkperson}>
          {imageIconList &&
            imageIconList.map((item: ImageIconList, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0
                      ? styles.thinkperson1
                      : index === 1
                      ? styles.thinkperson2
                      : styles.thinkperson3
                  }
                  onClick={() => {
                    setIsActive(index)
                    setStyleClass(
                      index === 0
                        ? styles.getExtContainerp1
                        : index === 1
                        ? styles.getExtContainerp2
                        : styles.getExtContainerp3
                    )
                  }}
                >
                  <ImgLoader
                    className={styles.image}
                    src={item.image.src}
                    alt="testimonie-img1"
                    height={item.image.height}
                    width={item.image.width}
                  />
                  <h2>{item.title}</h2>
                </div>
              )
            })}
        </div>
        <div className={styles.thinkpersonsdata}>
          {imageIconDetails &&
            imageIconDetails.map((item, index) => {
              return (
                index === isActive && (
                  <div
                    key={index}
                    className={
                      isActive === 0
                        ? styles.thinkperson1data
                        : isActive === 1
                        ? styles.thinkperson2data
                        : styles.thinkperson3data
                    }
                  >
                    <h2
                      className={
                        index === 0
                          ? styles.thinkperson1dataTitle
                          : index === 1
                          ? styles.thinkperson2dataTitle
                          : styles.thinkperson3dataTitle
                      }
                    >
                      {item.title}
                    </h2>
                    <p
                      className={
                        index === 0
                          ? styles.thinkperson1dataSubtitle
                          : index === 1
                          ? styles.thinkperson2dataSubtitle
                          : styles.thinkperson3dataSubtitle
                      }
                      dangerouslySetInnerHTML={{
                        __html: item.content1,
                      }}
                    />
                    <p
                      className={
                        isActive === 0
                          ? styles.thinkperson1datamoreSubtitle
                          : isActive === 1
                          ? styles.thinkperson2datamoreSubtitle
                          : styles.thinkperson3datamoreSubtitle
                      }
                      dangerouslySetInnerHTML={{
                        __html: item.content2,
                      }}
                    />
                  </div>
                )
              )
            })}
        </div>
      </div>
    </div>
  )
}
