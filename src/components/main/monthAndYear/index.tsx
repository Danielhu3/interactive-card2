import React from 'react'
import { MonthAndYear } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <MonthAndYear>{children}</MonthAndYear>
  )
}

export default index