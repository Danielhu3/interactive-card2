import React from 'react'
import { Input } from './style'

type Props = {
    placeholder:string;
}
const index = ({placeholder}: Props) => {
  return (
    <Input placeholder={placeholder}></Input>
  )
}

export default index