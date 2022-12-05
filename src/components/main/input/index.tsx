import React from 'react'
import { Input } from './style'

type Props = {
    placeholder:string;
    field: string;
    maxLength?: number;

    form: { cardholderName: string; cardNumber: string; month: string; year: string; cvc: string; };
    setForm: React.Dispatch<React.SetStateAction<{
      cardholderName: string;
      cardNumber: string;
      month: string;
      year: string;
      cvc: string;
  }>>

}
const index = ({placeholder, form, setForm, field, maxLength}: Props) => {
  

  function set(actualField: string, value: string){
    setForm(oldValues=>({...oldValues, [field]:value}))
    console.log(form)


  }
  return (
    <Input placeholder={placeholder} onChange={(e)=> set(field, e.target.value)} 
    value={form[field as keyof typeof form]}
    maxLength={maxLength && maxLength}
    >

    </Input>
  )
}

export default index