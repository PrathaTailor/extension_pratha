import styles from './inlineAlert.module.scss'
import ImgLoader from '@components/ImgLoader'
interface AlertDetails {
  iconAlert: string
  description: string
}
const InlineAlert = (props: { alertDetails: AlertDetails }) => {
  const { alertDetails } = props
  return (
    <div className={styles.container}>
      <p className={styles.alertDesc}>
        <ImgLoader
          className={styles.alertIcon}
          src={alertDetails.iconAlert}
          alt="Icon Alert"
          width={30}
          height={30}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: alertDetails.description,
          }}
        />
      </p>
    </div>
  )
}

export default InlineAlert
