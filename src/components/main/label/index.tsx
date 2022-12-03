import React from 'react'
import { Label } from './style'

type Props = {
    children:  JSX.Element;
    labelText: string;
    
}

const index = ({children, labelText}: Props) => {
  return (
    <Label>{labelText.toUpperCase()}{children}</Label>
  )
}

export default index