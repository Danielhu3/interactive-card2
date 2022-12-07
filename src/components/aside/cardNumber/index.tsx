import React from 'react'
import { CardNumber } from './style'

type Props = {
    cardnumber?: string;
}
const index = ({cardnumber}: Props) => {
  return (
    <CardNumber>{cardnumber ? cardnumber: '0000 0000 0000 0000'}</CardNumber>
  )
}

export default index