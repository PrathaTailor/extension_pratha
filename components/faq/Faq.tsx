import styles from './faq.module.scss'
import { useState } from 'react'

interface FaqList {
  question: string
  answer: string
}

const Faq = (props: { title: string; faqList: FaqList[] }) => {
  const { title, faqList = [] } = props
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.faqLists}>
          {faqList &&
            faqList.map((data: FaqList, index: number) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={index}
                  className={`${styles.faqItem}
                   ${isActive ? `${styles.active}` : ''} `}
                  onClick={() =>
                    isActive ? setActiveIndex(0) : setActiveIndex(index)
                  }
                >
                  <div
                    className={
                      isActive
                        ? `${styles.faqTitle} ${styles.activeTitle}`
                        : styles.faqTitle
                    }
                  >
                    {data.question}
                  </div>
                  <div
                    className={styles.faqBody}
                    dangerouslySetInnerHTML={{
                      __html: data.answer,
                    }}
                  ></div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Faq
