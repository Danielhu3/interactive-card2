import React from 'react'
import { Form } from './style'
import  MonthAndYear  from '../monthAndYear/';
import  Button  from '../button/';
import  DateCVC  from '../dateCVC/';
import  Input from '../input/';
import  Label  from '../label/';

const Index = () => {


  return (
    <Form>
          <Label labelText='cardholder name'>
            <Input placeholder='e.g Jane Appleseed'></Input>
          </Label>

          <Label labelText='card number'>
            <Input placeholder='e.g 1234 5678 9123 0000'></Input>
          </Label>

          <DateCVC>
            <Label labelText='exp. date (mm/yy)'>
                <MonthAndYear>
                  <Input placeholder='MM' ></Input>
                  <Input placeholder='YY'></Input>
                </MonthAndYear>      
            </Label>

            <Label labelText='cvc'>
              <Input placeholder='e.g 123' ></Input>
            </Label>
          </DateCVC>
          <Button />
    </Form>
  )
}

export default Index