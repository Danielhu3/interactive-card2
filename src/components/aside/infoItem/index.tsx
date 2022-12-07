import React from 'react'
import { InfoItem } from './style'

type Props = {
    text: string;
    defaultValue: string;
    divider?: boolean;
}
const index = ({text,defaultValue, divider}:Props) => {
  return (
    <InfoItem>{text ? text.toUpperCase() : defaultValue.toUpperCase()}{divider && '/'}</InfoItem>
  )
}

export default index