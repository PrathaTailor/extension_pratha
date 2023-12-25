import ImgLoader from '@components/ImgLoader'
import styles from './testimonials.module.scss'
// import testimonieimg4 from '../../images/assets/testimonie-img4.svg'
// import testimonieimg5 from '../../images/assets/testimonie-img5.svg'
// import testimonieimg6 from '../../images/assets/testimonie-img6.svg'
import testimonieimgstar from '../../images/assets/testimonie-img-star.svg'
import ImageObj from '@components/utils/interfaces'

interface TestimonailDetails {
  profileImg: ImageObj
  name: string
  reviewTitle: string
  reviewContent: string
}
export const Testimonials = (props: {
  title: string
  testimonailDetails: TestimonailDetails[]
}) => {
  const { title, testimonailDetails = [] } = props
  return (
    <div className={styles.clientsays}>
      <div className={styles.clientsaysp1}>
        <h2>{title}</h2>
      </div>
      <div className={styles.clientsaysp2}>
        {testimonailDetails &&
          testimonailDetails.map((item: TestimonailDetails, index: number) => {
            return (
              <div key={index} className={styles.clientsaysp2box}>
                <div className={styles.clientsaysp2boxs1}>
                  <ImgLoader
                    className={styles.image}
                    src={item.profileImg.src}
                    alt="testimonie-img4"
                    height={90}
                    width={90}
                  />
                  <h3>{item.name}</h3>
                </div>
                <div className={styles.clientsaysp2boxs2}>
                  <h5>{item.reviewTitle}</h5>
                  <p>{item.reviewContent}</p>
                </div>
                <div className={styles.clientsaysp2boxs3}>
                  <ImgLoader
                    className={styles.image}
                    src={testimonieimgstar.src}
                    alt="testimonie-img-star"
                    height={28}
                    width={28}
                  />
                  <ImgLoader
                    className={styles.image}
                    src={testimonieimgstar.src}
                    alt="testimonie-img-star"
                    height={28}
                    width={28}
                  />
                  <ImgLoader
                    className={styles.image}
                    src={testimonieimgstar.src}
                    alt="testimonie-img-star"
                    height={28}
                    width={28}
                  />
                  <ImgLoader
                    className={styles.image}
                    src={testimonieimgstar.src}
                    alt="testimonie-img-star"
                    height={28}
                    width={28}
                  />
                  <ImgLoader
                    className={styles.image}
                    src={testimonieimgstar.src}
                    alt="testimonie-img-star"
                    height={28}
                    width={28}
                  />
                </div>
              </div>
            )
          })}
        {/* <div className={styles.clientsaysp2box}>
          <div className={styles.clientsaysp2boxs1}>
            <ImgLoader
              className={styles.image}
              src={testimonieimg4.src}
              alt="testimonie-img4"
              height={90}
              width={90}
            />
            <h3>Daniel T</h3>
          </div>
          <div className={styles.clientsaysp2boxs2}>
            <h5>Amazing</h5>
            <p>
              The software and customer support are the best. I had a number of
              different forms to fill out and they walked me through all of
              them. Would recommend.
            </p>
          </div>
          <div className={styles.clientsaysp2boxs3}>
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
          </div>
        </div>
        <div className={styles.clientsaysp2box}>
          <div className={styles.clientsaysp2boxs1}>
            <ImgLoader
              className={styles.image}
              src={testimonieimg5.src}
              alt="testimonie-img4"
              height={90}
              width={90}
            />
            <h3>Karen S </h3>
          </div>
          <div className={styles.clientsaysp2boxs2}>
            <h5>Very happy customer! 👍</h5>
            <p>
              Very impressed with this co. It was easy to file an extension and
              the professionalism is outstanding. Response to my questions were
              very quick. I highly recommend! Good job!
            </p>
          </div>
          <div className={styles.clientsaysp2boxs3}>
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
          </div>
        </div>
        <div className={styles.clientsaysp2box}>
          <div className={styles.clientsaysp2boxs1}>
            <ImgLoader
              className={styles.image}
              src={testimonieimg6.src}
              alt="testimonie-img4"
              height={90}
              width={90}
            />
            <h3>Todd</h3>
          </div>
          <div className={styles.clientsaysp2boxs2}>
            <h5>The real deal</h5>
            <p>
              These guys do a great job we had a problem with the extension and
              it was resolved asap, very organized site. I was a super
              concerned, but they do a great job.
            </p>
          </div>
          <div className={styles.clientsaysp2boxs3}>
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
            <ImgLoader
              className={styles.image}
              src={testimonieimgstar.src}
              alt="testimonie-img-star"
              height={28}
              width={28}
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
