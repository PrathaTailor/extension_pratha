import Link from 'next/link'
import styles from './refund.module.scss'

export const Refund = () => {
  return (
    <div className={styles.root}>
      <div className={styles.refundContainer}>
        <div className={styles.refundWrapper}>
          <h1 className={styles.title}>Refund Policy</h1>
          <div className={styles.refundContentWrapper}>
            <p>
              Thanks for trusting{' '}
              <b>
                <Link href="/">extension.tax</Link>
              </b>{' '}
              to obtain your tax extension.
            </p>
            <p>
              If you are not entirely satisfied with your purchase, we’re here
              to help.
            </p>
            <h3>Refunds</h3>
            <p>
              After your tax extension submission is received, we will process
              with the IRS on your behalf and charge your card if you elect for
              us to do so. There are no refunds allowed for successfully
              submitted tax extensions, or submissions that fail due to
              incorrectly submitted data.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions pertaining to this or otherwise, please
              contact us:{' '}
              <span>
                <a href="mailto:support@extension.tax">support@extension.tax</a>
              </span>
            </p>
            <p>Last Updated on March 7, 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}
