import React from 'react'
import Ccompo from './Ccompo'
import styled from 'styled-components'
import { useContext } from 'react'
import { titleContext } from './Context'

const Bcompo = () => {
    const {title, changTitle} = useContext(titleContext);
  return (
    <div>
      <h3>This is Bcompo - {title}</h3>
      <Ccompo />
    </div>
  )
}

export default Bcompo
