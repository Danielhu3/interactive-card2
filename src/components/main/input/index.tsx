import React from 'react'
import  {oneValue}  from '../../../Hooks/useForm';
import { Input } from './style'

type Props = {
    placeholder:string;
    field: string;
    maxLength?: number;

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
const index = ({placeholder, form, setForm, field, maxLength}: Props) => {
  const thisInputValue = oneValue({field,form,setForm})
 
  return (
    <>
    <Input placeholder={placeholder} 
    onChange={(e)=> thisInputValue.onChange(e.target.value)}
    value={form[field as keyof typeof form].value}
    maxLength={maxLength && maxLength}
    >
    </Input>
    {form[field as keyof typeof form].error && <p>erro</p>}
    </>
  )
}
// eu posso criar um state para só mostrar os erros após clicar no botao. mas, validar os inputs onblur
export default index