import React from 'react'
type Props = {
  setForm: React.Dispatch<React.SetStateAction<{
    cardholderName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvc: string;
}>>;
  form: { cardholderName: string; cardNumber: string; month: string; year: string; cvc: string; };
  field:string;

}
const oneValue = ({ field, form, setForm}: Props) => {
  function onChange(value:string){
    if(field === 'month' || field === 'year' || field === 'cvc'){
      if(/^[0-9\b]+$/.test(value) || value.length === 0){
        setForm(oldValues=>({...oldValues, [field]:value}))
      }
      return
    }
    setForm(oldValues=>({...oldValues, [field]:value}))
    return
  }
  return {onChange}
}

const form = () => {
  return {}
}
export {oneValue, form}