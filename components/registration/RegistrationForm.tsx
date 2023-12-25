import { Registration } from '@atomicleads/ext-satellite-form'
import { FC } from 'react'

interface RegistrationFormProps {
  productFocus: 'extension' | 'return'
}

const RegistrationForm: FC<RegistrationFormProps> = ({ productFocus }) => {
  return <Registration productFocus={productFocus} disablePasswordConfirm />
}

export default RegistrationForm
