import React from 'react'
import { Form } from './style'
import  MonthAndYear  from '../monthAndYear/';
import  Button  from '../button/';
import  DateCVC  from '../dateCVC/';
import  Input from '../input/';
import  Label  from '../label/';

const Index = () => {

  const [form, setForm] = React.useState(
    {
      cardholderName:{
        value:'',
        error: false
      },
      cardNumber:{
        value:'',
        error: false
      },
      month:{
        value:'',
        error: false
      },
      year:{
        value:'',
        error: false
      },
      cvc:{
        value:'',
        error: false
      },
    }
  )



  return (
    <Form>
          <Label labelText='cardholder name'>
            <Input placeholder='e.g Jane Appleseed' form={form} setForm={setForm} field={'cardholderName'}></Input>
          </Label>

          <Label labelText='card number'>
            <Input placeholder='e.g 1234 5678 9123 0000' form={form} setForm={setForm} field={'cardNumber'} maxLength={16}></Input>
          </Label>

          <DateCVC>
            <Label labelText='exp. date (mm/yy)'>
                <MonthAndYear>
                  <Input placeholder='MM' form={form} setForm={setForm} field={'month'} maxLength={2}></Input>
                  <Input placeholder='YY' form={form} setForm={setForm} field={'year'} maxLength={2}></Input>
                </MonthAndYear>      
            </Label>

            <Label labelText='cvc'>
              <Input placeholder='e.g 123' form={form} setForm={setForm} field={'cvc'} maxLength={3}></Input>
            </Label>
          </DateCVC>
          <Button />
    </Form>
  )
}

export default Index