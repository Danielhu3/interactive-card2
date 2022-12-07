import React from 'react'
import  Card  from './card/'
import  CardLogo  from './cardLogo/'
import  CardNumber  from './cardNumber/'
import  Date  from './date/'
import  Info  from './info/'
import  InfoItem  from './infoItem/'
import { Aside } from './style'

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
}
const index = ({form}:Props) => {
  return (
    <Aside>

      <Card side='front'>
        <CardLogo />
        <CardNumber cardNumber={form.cardNumber.value} />
        <Info>
          <InfoItem text={form.cardholderName.value} defaultValue='Jane Appleseed' />
          <Date>
            <InfoItem text={form.month.value}  defaultValue='00' divider={true}/>
            <InfoItem text={form.year.value}  defaultValue='00'/>
          </Date>
        </Info>
      </Card>

      <Card side='back'>
        <InfoItem text={form.cvc.value}  defaultValue='000'/>
      </Card>
    </Aside>
  )
}

export default index