import React from 'react'
import { DateCVC } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}: Props) => {
  return (
    <DateCVC>{children}</DateCVC>
  )
}

export default index