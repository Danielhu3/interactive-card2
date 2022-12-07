import React from 'react'
import { Card } from './style'

type Props = {
    side:string;
    children?: JSX.Element | JSX.Element[]
}
const index = ({side, children}:Props) => {
  return (
    <Card side={side}>{children}</Card>
  )
}

export default index