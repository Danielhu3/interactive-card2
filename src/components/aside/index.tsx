import React from 'react'
import  Card  from './card/'
import  CardLogo  from './cardLogo/'
import  CardNumber  from './cardNumber/'
import  Date  from './date/'
import  Info  from './info/'
import  InfoItem  from './infoItem/'
import { Aside } from './style'

const index = () => {
  return (
    <Aside>

      <Card side='front'>
        <CardLogo />
        <CardNumber />
        <Info>
          <InfoItem text='' defaultValue='JanE Appleseed' />
          <Date>
            <InfoItem text='' defaultValue='00' divider={true}/>
            <InfoItem text='' defaultValue='00'/>
          </Date>
        </Info>
      </Card>

      <Card side='back'>
        <InfoItem text='' defaultValue='000'/>
      </Card>
    </Aside>
  )
}

export default index