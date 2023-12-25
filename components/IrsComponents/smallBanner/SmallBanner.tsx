import styles from './smallBanner.module.scss'
import ImgLoader from '@components/ImgLoader'
import { useRouter } from 'next/router'
interface TaxDeadlineDetails {
  taxFilingDesc: string
  iconTaxFiling: string
  btnTextLg: string
  btnTextSm: string
  btnLink: string
  iconArrow: string
}
const SmallBanner = (props: { taxDeadlineDetails: TaxDeadlineDetails }) => {
  const { taxDeadlineDetails } = props
  const router = useRouter()

  return (
    <div className={styles.taxFilingWrapper}>
      <div className={styles.taxDeadline}>
        <ImgLoader
          className={styles.iconTaxFiling}
          src={taxDeadlineDetails.iconTaxFiling}
          width={64}
          height={70}
          alt="Icon Tax Filing"
        />
        <p
          className={styles.taxFilingDesc}
          dangerouslySetInnerHTML={{
            __html: taxDeadlineDetails.taxFilingDesc,
          }}
        />
      </div>
      <div className={styles.taxFilingInteraction}>
        <button
          className={styles.btn}
          onClick={() => router.push(taxDeadlineDetails.btnLink)}
        >
          <span className={styles.btnText}>
            <span
              className={styles.lg}
              dangerouslySetInnerHTML={{
                __html: taxDeadlineDetails.btnTextLg,
              }}
            />
            <span
              className={styles.sm}
              dangerouslySetInnerHTML={{
                __html: taxDeadlineDetails.btnTextSm,
              }}
            />
          </span>
          <ImgLoader
            src={taxDeadlineDetails.iconArrow}
            alt="Icon Arrow"
            width={16}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default SmallBanner
