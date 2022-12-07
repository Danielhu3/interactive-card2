import React from 'react'
import { Date } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Date>{children}</Date>
  )
}

export default index