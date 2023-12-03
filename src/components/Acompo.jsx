import React from 'react'
import { titleContext } from './Context'
import { useContext } from 'react'

const h2_style = {
    color: "red"
}

const Acompo = () => {
    const{title, changeTitle} = useContext(titleContext);
  return (
    <div>
      <h2 style={h2_style}>this is Acompo  {title}</h2>
      <button onClick={changeTitle}>Click me</button>
    </div>
  )
}

export default Acompo
