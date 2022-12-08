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

    if(field === 'cardNumber'){
      
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
    }

    setForm(oldValues=>({...oldValues, [field]: {'value':value, 'error': form[field as keyof typeof form].error}}))

    return
  }
  return {onChange}
}

const formValues = ({form,setForm}:formValuesProps) => {
  const sizes = {
    cardNumber: 19,
    month: 2,
    year: 2,
    cvc:3,
  }
  function setError(key:string, error:string){
    setForm(oldValues=>({...oldValues, [key]: {'value':form[key as keyof typeof form].value, 'error': error}}))

  }
  function validate(){
    for (const [key, values] of Object.entries(form)){
      setError(key, '')
      
      if(values.value.length === 0){
        setError(key,"Can't be blank")
      } 

      else if(sizes[key as keyof typeof sizes] && values.value.length < sizes[key as keyof typeof sizes]){
        setError(key,'Too short')
      }
      
      else if(key === 'cardNumber'){
        if(!/^[0-9\b]+$/.test(values.value)){
          setError(key,'Wrong format, numbers only')
        }
      }

    }
  }
  return {validate}
}
export {oneValue, formValues}

