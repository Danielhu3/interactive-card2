import React from 'react'
import { Label } from './style'

type Props = {
    children?:  JSX.Element | JSX.Element[];  
    labelText: string;
    
}

const index = ({children, labelText}: Props) => {
  console.log(children)
  return (
    <Label>{labelText.toUpperCase()}{children}</Label>
  )
}

export default index