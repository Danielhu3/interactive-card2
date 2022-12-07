import React from 'react'
import  Card  from './card/'
import { Aside } from './style'

const index = () => {
  return (
    <Aside>
      <Card side='front'/>
      <Card side='back'/>
    </Aside>
  )
}

export default index