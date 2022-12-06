import React from 'react'
type oneValueProps = {
  field:string;

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

    setForm: React.Dispatch<React.SetStateAction<{
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
  
}

type formValuesProps = {
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

    setForm: React.Dispatch<React.SetStateAction<{
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

}
const oneValue = ({ field, form, setForm}: oneValueProps) => {

  function onChange(value:string){
    if(field === 'month' || field === 'year' || field === 'cvc'){
      if(/^[0-9\b]+$/.test(value) || value.length === 0){
        setForm(oldValues=>({...oldValues, [field]: {'value':value, 'error': form[field as keyof typeof form].error}}))
      }
      return
    }

    setForm(oldValues=>({...oldValues, [field]: {'value':value, 'error': form[field as keyof typeof form].error}}))

    return
  }
  return {onChange}
}

const formValues = ({form,setForm}:formValuesProps) => {
  function setError(key:string, error:string){
    setForm(oldValues=>({...oldValues, [key]: {'value':form[key as keyof typeof form].value, 'error': error}}))

  }
  function validate(){
    for (const [key, values] of Object.entries(form)){
      console.log(form)
      if(values.value.length === 0){
        setError(key,"Can't be blank")
      } 
      else if(key === 'cardNumber'){
        if(!/^[0-9\b]+$/.test(values.value)){
          setError(key,'Wrong format, numbers only')
        }
      }

      else{
        setError(key, '')
      }

      
    }
  }
  return {validate}
}
export {oneValue, formValues}

//blank >> too short >>> numbers only
// to short will use regex