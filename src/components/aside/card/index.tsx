import React from 'react'
import { Card } from './style'

type Props = {
    side:string;
}
const index = ({side}:Props) => {
  return (
    <Card side={side}></Card>
  )
}

export default index