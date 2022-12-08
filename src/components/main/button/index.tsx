import React from 'react'
import { formValues } from '../../../Hooks/useForm'
import { Button } from './style'

type Props = {
  form?: {
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

    setForm?: React.Dispatch<React.SetStateAction<{
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
      
  }>>;

  text: string;
}
const index = ({form,setForm, text}:Props) => {
  if(form && setForm){
  const thisFormValues = formValues({form,setForm})
  return (
    <Button type='submit' onClick={()=>thisFormValues.validate()}>{text}</Button>
  )
  }
  return <Button type='submit'>{text}</Button>
}

export default index