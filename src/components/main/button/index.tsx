import React from 'react'
import { formValues } from '../../../Hooks/useForm'
import { Button } from './style'

type Props = {
  form: {
    cardholderName: {
        value: string;
        error: string;
    };
    cardNumber: {
        value: string;
        error: string;
    };
    month: {
        value: string;
        error: string;
    };
    year: {
      value: string;
      error: string;
    };
    cvc: {
      value: string;
      error: string;
    };
    };
}
const index = ({form}:Props) => {
  const thisFormValues = formValues({form})
  return (
    <Button type='submit' onClick={()=>thisFormValues.validate()}>Confirm</Button>
  )
}

export default index