import React from 'react'
type oneValueProps = {
  field:string;

  form: {
    cardholderName: {
        value: string;
        error: boolean;
    };
    cardNumber: {
        value: string;
        error: boolean;
    };
    month: {
        value: string;
        error: boolean;
    };
    year: {
      value: string;
      error: boolean;
    };
    cvc: {
      value: string;
      error: boolean;
    };
    };

    setForm: React.Dispatch<React.SetStateAction<{
      cardholderName: {
        value: string;
        error: boolean;
    };
    cardNumber: {
        value: string;
        error: boolean;
    };
    month: {
        value: string;
        error: boolean;
    };
    year: {
      value: string;
      error: boolean;
    };
    cvc: {
      value: string;
      error: boolean;
    };
      
  }>>;
  

}
const oneValue = ({ field, form, setForm}: oneValueProps) => {
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

const formValues = () => {
  return {}
}
export {oneValue, formValues}