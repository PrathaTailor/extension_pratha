// import styles from './contact.module.scss'
// import iconMail from '../../images/icons/icon-mail-purple.png'
// import iconFile from '../../images/icons/icon-file-purple.png'
// import iconDragDrop from '../../images/icons/icon-drag-drop.png'
// import Image from 'next/image'

export const Contact = () => {
  return (
    <>
      <div id="dp_newticket_form" style={{ display: 'none' }}></div>
      {/* <div className={styles.container}>
        <div className={styles.formHeading}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.desc}>
            Please complete this form and one of our agents will reply to you by
            email as soon as possible.
          </p>
        </div>
        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>
            <Image className={styles.mailImg} src={iconMail} alt="Icon Mail" />{' '}
            Contact Us
          </h3>
          <p className={styles.formDesc}>
            As a benefit of your FileSmart membership, you are entitled to up to
            5 detailed questions about your tax situation each month! As a
            FileSmart member you will benefit from significant savings by not
            paying an hourly rate to talk to your expert... It’s all included as
            a benefit of membership!
          </p>
          <form className={styles.formContact}>
            <div className={styles.halfWrapper}>
              <div className={`${styles.fieldWrapper} ${styles.half}`}>
                <label className={styles.formLabel}>Name*</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your name here"
                  required
                />
              </div>
              <div className={`${styles.fieldWrapper} ${styles.half}`}>
                <label className={styles.formLabel}>Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email here"
                  required
                />
              </div>
            </div>
            <div className={`${styles.fieldWrapper}`}>
              <label className={styles.formLabel}>Subject*</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject here"
                required
              />
            </div>
            <div className={`${styles.fieldWrapper}`}>
              <label className={styles.formLabel}>Message*</label>
              <textarea
                name="message"
                placeholder="Enter your message here"
                required
              ></textarea>
            </div>
            <div className={styles.uploadWrapper}>
              <input className={styles.upload} type="file" name="uploadFile" />
              <div className={styles.chooseFiles}>
                <Image src={iconFile} alt="Icon File" />
                Choose Files
              </div>
              <span className={styles.or}>or</span>
              <div className={styles.dragdrop}>
                <Image src={iconDragDrop} alt="Icon Drag Drop" /> Drag and drop
              </div>
            </div>
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.submit}`}>
                Submit
              </button>
              <button className={`${styles.btn} ${styles.reset}`}>Reset</button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  )
}
