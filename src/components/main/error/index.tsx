import React from 'react'
import { Error } from './style'

type Props = {
    text: string
}
const index = ({text}:Props) => {
  return (
    <Error>{text}</Error>
  )
}

export default index