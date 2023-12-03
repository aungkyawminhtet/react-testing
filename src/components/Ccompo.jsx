import React from 'react'
import { useContext } from 'react'
import { titleContext } from './Context'

const Ccompo = () => {
    const {title, changeTitle} = useContext(titleContext);
  return (
    <div>
      <h1>this is Ccompo {title}</h1>
      <button onClick={changeTitle}>Click me</button>
    </div>
  )
}

export default Ccompo
