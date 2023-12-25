import styles from './boxedImage.module.scss'
import boxedImage from '../../../images/assets/boxed-image.png'
import Image from 'next/image'

interface BoxedImageDetails {
  boxedImg: string
}

export const BoxedImage = (props: { boxedImageDetails: BoxedImageDetails }) => {
  const { boxedImageDetails } = props
  return (
    <div className={styles.imgWrapper}>
      <Image
        src={boxedImageDetails?.boxedImg || boxedImage}
        alt="Boxed Image"
        width={678}
        height={279}
      />
    </div>
  )
}
