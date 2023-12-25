import styles from './richtext.module.scss'
interface Title {
  title: string
}
interface SubTitle {
  subTitle: string
}
interface QuestionAnswerDetails {
  question: string
  answer: string
}
const Richtext = (props: {
  title: Title[]
  subTitle: SubTitle[]
  questionAnswerDetails: QuestionAnswerDetails[]
}) => {
  const { title = [], subTitle = [], questionAnswerDetails = [] } = props
  return (
    <div className={styles.container}>
      {title &&
        title.map((item: Title, index: number) => {
          return (
            <h3
              key={index}
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: item.title,
              }}
            />
          )
        })}
      {subTitle &&
        subTitle.map((item: SubTitle, index: number) => {
          return (
            <h4
              key={index}
              className={styles.subTitle}
              dangerouslySetInnerHTML={{
                __html: item.subTitle,
              }}
            />
          )
        })}
      {questionAnswerDetails &&
        questionAnswerDetails.map(
          (data: QuestionAnswerDetails, index: number) => {
            return (
              <div key={index}>
                <h5
                  className={styles.question}
                  dangerouslySetInnerHTML={{
                    __html: data.question,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.answer,
                  }}
                />
              </div>
            )
          }
        )}
    </div>
  )
}

export default Richtext
