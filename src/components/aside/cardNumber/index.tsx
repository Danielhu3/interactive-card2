import React from 'react'
import { CardNumber } from './style'

type Props = {
    cardNumber: string;
}
const index = ({cardNumber}: Props) => {
  return (
    <CardNumber>{cardNumber ? cardNumber: '0000 0000 0000 0000'}</CardNumber>
  )
}

export default index