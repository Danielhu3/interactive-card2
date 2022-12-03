import React from 'react'
import { Label } from './style'

type Props = {
    children:  JSX.Element;
    labelText?: string;
    
}

const index = ({children, labelText}: Props) => {
  return (
    <Label>{children}</Label>
  )
}

export default index