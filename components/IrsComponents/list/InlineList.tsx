import styles from './inlineList.module.scss'
interface ListDetails {
  item: string
  id: string
}
const InlineList = (props: {
  inlineListTitle: string
  listDetails: ListDetails[]
}) => {
  const { inlineListTitle, listDetails } = props
  return (
    <div className={styles.fluid}>
      <div className={styles.container}>
        <h3 className={styles.title}>{inlineListTitle}</h3>
        <ul className={styles.list}>
          {listDetails &&
            listDetails.map((data: ListDetails, index: number) => {
              return (
                <li key={index} id={`${index}`}>
                  <a href={data.id === '' ? `#${index + 1}` : `#${data.id}`}>
                    {data.item}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default InlineList
