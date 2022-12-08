import React from 'react'
import { Form } from './style'
import  MonthAndYear  from '../monthAndYear/';
import  Button  from '../button/';
import  DateCVC  from '../dateCVC/';
import  Input from '../input/';
import  Label  from '../label/';
import  Error  from '../error/';

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
const Index = ({form, setForm}: Props) => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()

    if(isSubmited){
      for (const key of Object.keys(form)){
        setForm(oldValues=>({...oldValues, [key]: {'value':'', 'error': ''}}))
      }
      //setIsSubmited(false)
      return
    }



    
    

  }

  const [isSubmited, setIsSubmited] = React.useState(true);
   if(!isSubmited)return (
    <Form onSubmit={(e)=>handleSubmit(e)}>
          <Label labelText='cardholder name'>
            <Input placeholder='e.g Jane Appleseed' form={form} setForm={setForm} field={'cardholderName'}></Input>
            {form.cardholderName.error ? <Error text={form.cardholderName.error}/> : <></>}
          </Label>

          <Label labelText='card number'>
            <Input placeholder='e.g 1234 5678 9123 0000' form={form} setForm={setForm} field={'cardNumber'} maxLength={19}></Input>
            {form.cardNumber.error ? <Error text={form.cardNumber.error}/> : <></>}
          </Label>

          <DateCVC>
            <Label labelText='exp. date (mm/yy)'>
                <MonthAndYear>
                  <Input placeholder='MM' form={form} setForm={setForm} field={'month'} maxLength={2}></Input>
                  <Input placeholder='YY' form={form} setForm={setForm} field={'year'} maxLength={2}></Input>
                  {form.month.error || form.year.error ? <Error text={form.month.error ? form.month.error: form.year.error}/> : <></>}
                </MonthAndYear>      
            </Label>

            <Label labelText='cvc'>
              <Input placeholder='e.g 123' form={form} setForm={setForm} field={'cvc'} maxLength={3}></Input>
              {form.cvc.error ? <Error text={form.cvc.error}/> : <></>}
            </Label>
          </DateCVC>
          <Button form={form} setForm={setForm} text='Confirm'/>
    </Form>
  ) 
  return (
  <Form onSubmit={(e)=> handleSubmit(e)}>
    <Button text='Continue'/>
  </Form>
  )
}

export default Index